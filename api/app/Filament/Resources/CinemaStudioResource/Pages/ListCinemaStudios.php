<?php

namespace App\Filament\Resources\CinemaStudioResource\Pages;

use App\Filament\Resources\CinemaStudioResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListCinemaStudios extends ListRecords
{
    protected static string $resource = CinemaStudioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
