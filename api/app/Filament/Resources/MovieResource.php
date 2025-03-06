<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MovieResource\Pages;
use App\Models\File;
use App\Models\Movie;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MovieResource extends Resource
{
    protected static ?string $model = Movie::class;
    protected static ?string $navigationIcon = 'heroicon-o-film';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form->schema([
            TextInput::make('title')
                ->required()
                ->maxLength(255),
            TextInput::make('genre')
                ->required()
                ->maxLength(255),
            TextInput::make('age_restriction')
                ->required()
                ->maxLength(10),
            TextInput::make('duration')
                ->required()
                ->numeric(),
            TextInput::make('language')
                ->required()
                ->maxLength(100),
            Textarea::make('synopsis')
                ->required()
                ->columnSpanFull(),
            TextInput::make('author')
                ->required()
                ->maxLength(255),
            DatePicker::make('start_date')
                ->required(),
            DatePicker::make('end_date')
                ->required(),
            FileUpload::make('cover')
                ->required()
                ->afterStateUpdated(fn ( $state, ?Model $record) => self::saveCover($record, $state)),
        ]);
    }

    protected static function saveCover(?Model $record, UploadedFile $file): void
    {
        if (!$record) return;

        if ($record->cover) {
            Storage::disk('public')->delete($record->cover->file_path);
            $record->cover->delete();
        }

        $filePath = $file->store('movie/covers', 'public');

        $record->cover()->create([
            'file_name' => $file->getClientOriginalName(),
            'file_path' => $filePath,
            'file_type' => $file->getMimeType(),
        ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('title')->sortable()->searchable(),
                TextColumn::make('genre')->sortable()->searchable(),
                TextColumn::make('age_restriction'),
                TextColumn::make('duration'),
                TextColumn::make('language'),
                TextColumn::make('start_date')->date(),
                TextColumn::make('end_date')->date(),
                ImageColumn::make('cover.file_link')
                    ->disk('public')
                    ->label('Cover'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => Pages\ListMovies::route('/'),
            'create' => Pages\CreateMovie::route('/create'),
            'edit'   => Pages\EditMovie::route('/{record}/edit'),
        ];
    }
}
