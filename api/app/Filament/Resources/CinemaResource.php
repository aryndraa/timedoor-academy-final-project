<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CinemaResource\Pages;
use App\Filament\Resources\CinemaResource\RelationManagers;
use App\Models\Cinema;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
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

class CinemaResource extends Resource
{
    protected static ?string $model = Cinema::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office';

    protected static ?string $navigationGroup = 'Cinema';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('address')
                    ->required()
                    ->maxLength(500),
                TextInput::make('country')
                    ->required()
                    ->maxLength(500),
                TextInput::make('province')
                    ->required()
                    ->maxLength(500),
                TimePicker::make('opening_time')
                    ->required(),
                TimePicker::make('closing_time')
                    ->required(),
                FileUpload::make('picture')
                    ->image()
                    ->directory('cinema')
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

        $filePath = $file->store('cinema', 'public');


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
                TextColumn::make('address')->sortable()->searchable(),
                TextColumn::make('opening_time')->sortable(),
                TextColumn::make('closing_time')->sortable(),
                ImageColumn::make('picture.file_url'),
            ])
            ->filters([
                //
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCinemas::route('/'),
            'create' => Pages\CreateCinema::route('/create'),
            'edit' => Pages\EditCinema::route('/{record}/edit'),
        ];
    }
}
