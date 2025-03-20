<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CinemaStudioResource\Pages;
use App\Filament\Resources\CinemaStudioResource\RelationManagers;
use App\Models\CinemaStudio;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CinemaStudioResource extends Resource
{
    protected static ?string $model = CinemaStudio::class;

    protected static ?string $navigationIcon = 'heroicon-o-play-circle';

    protected static ?string $navigationGroup = 'Cinema';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('cinema_id')
                    ->relationship('cinema', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                Select::make('studio_id')
                    ->relationship('studio', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                TextInput::make('total_seats')
                    ->numeric()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('cinema.name')->sortable()->searchable(),
                TextColumn::make('studio.name')->sortable()->searchable(),
                TextColumn::make('total_seats')->sortable(),
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
            'index' => Pages\ListCinemaStudios::route('/'),
            'create' => Pages\CreateCinemaStudio::route('/create'),
            'edit' => Pages\EditCinemaStudio::route('/{record}/edit'),
        ];
    }
}
