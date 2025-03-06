<?php

namespace App\Filament\Resources\MoviePriceResource\Pages;

use App\Filament\Resources\MoviePriceResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMoviePrices extends ListRecords
{
    protected static string $resource = MoviePriceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
