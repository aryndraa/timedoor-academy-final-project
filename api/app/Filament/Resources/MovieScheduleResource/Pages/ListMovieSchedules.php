<?php

namespace App\Filament\Resources\MovieScheduleResource\Pages;

use App\Filament\Resources\MovieScheduleResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMovieSchedules extends ListRecords
{
    protected static string $resource = MovieScheduleResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
