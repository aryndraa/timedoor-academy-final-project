<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MoviePriceResource\Pages;
use App\Filament\Resources\MoviePriceResource\RelationManagers;
use App\Models\CinemaStudio;
use App\Models\MoviePrice;
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

class MoviePriceResource extends Resource
{
    protected static ?string $model = MoviePrice::class;

    protected static ?string $navigationIcon = 'heroicon-o-currency-dollar';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('movie_id')
                    ->relationship('movie', 'title')
                    ->required(),
                Select::make('cinema_studio_id')
                    ->options(function () {
                        return CinemaStudio::with(['cinema', 'studio'])->get()
                            ->mapWithKeys(function ($cinemaStudio) {
                                return [$cinemaStudio->id => $cinemaStudio->cinema->name . ' - ' . $cinemaStudio->studio->name];
                            });
                    })
                    ->required(),
                TextInput::make('price')
                    ->numeric()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('movie.title')->sortable()->searchable(),
                TextColumn::make('cinemaStudio.cinema.name')->label('Cinema')->sortable()->searchable(),
                TextColumn::make('cinemaStudio.studio.name')->label('Studio')->sortable()->searchable(),
                TextColumn::make('price')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListMoviePrices::route('/'),
            'create' => Pages\CreateMoviePrice::route('/create'),
            'edit' => Pages\EditMoviePrice::route('/{record}/edit'),
        ];
    }
}
