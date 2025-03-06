<?php

namespace App\Filament\Resources\MovieCasterResource\Pages;

use App\Filament\Resources\MovieCasterResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMovieCasters extends ListRecords
{
    protected static string $resource = MovieCasterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
