<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MovieCasterResource\Pages;
use App\Filament\Resources\MovieCasterResource\RelationManagers;
use App\Models\Movie;
use App\Models\MovieCaster;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MovieCasterResource extends Resource
{
    protected static ?string $model = MovieCaster::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('name')
                ->required()
                ->maxLength(255),
            Select::make('movie_id')
                ->label('Movie')
                ->relationship('movie', 'title')
                ->searchable()
                ->preload()
                ->required()
                ->rules(['required', 'exists:movies,id']),
            FileUpload::make('picture')
                ->image()
                ->directory('casters/pictures')
                ->disk('public')
                ->afterStateUpdated(fn ($state, ?Model $record) => self::savePicture($record, $state)),
        ]);
    }

    protected static function savePicture(?Model $record, UploadedFile $file): void
    {
        if (!$record) return;

        if ($record->picture) {
            Storage::disk('public')->delete($record->picture->file_path);
            $record->picture->delete();
        }

        $filePath = $file->store('movie/casters', 'public');


        $record->picture()->create([
            'file_name' => basename($filePath),
            'file_path' => $filePath,
            'file_type' => 'image',
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('movie.title')
                    ->label('Movie')
                    ->sortable()
                    ->searchable(),
                ImageColumn::make('picture.file_url')
                    ->disk('public/')
                    ->label('Picture'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [

        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMovieCasters::route('/'),
            'create' => Pages\CreateMovieCaster::route('/create'),
            'edit' => Pages\EditMovieCaster::route('/{record}/edit'),
        ];
    }
}
