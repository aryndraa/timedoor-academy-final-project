<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MovieScheduleResource\Pages;
use App\Models\Movie;
use App\Models\MoviePrice;
use App\Models\MovieSchedule;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteAction;

class MovieScheduleResource extends Resource
{
    protected static ?string $model = MovieSchedule::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar';
    protected static ?string $navigationGroup = 'Movies';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
                ->schema([
                    Select::make('movie_price_id')
                        ->relationship('moviePrice', 'id')
                        ->label('Movie')
                        ->options(function () {
                            return MoviePrice::with(['cinemaStudio.studio', 'movie'])
                                ->get()
                                ->mapWithKeys(function ($moviePrice) {
                                    return [
                                        $moviePrice->id => optional($moviePrice->movie)->title. ' - ' .
                                            optional($moviePrice->cinemaStudio?->studio)->name
                                    ];
                                });
                        })
                        ->required(),
                    TimePicker::make('time')
                        ->required(),
                ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                TextColumn::make('moviePrice.price')
                    ->label('Movie Price')
                    ->sortable(),
                TextColumn::make('time')
                    ->sortable(),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMovieSchedules::route('/'),
            'create' => Pages\CreateMovieSchedule::route('/create'),
            'edit' => Pages\EditMovieSchedule::route('/{record}/edit'),
        ];
    }
}
