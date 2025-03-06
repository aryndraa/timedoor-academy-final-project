<?php

namespace App\Filament\Resources\CinemaStudioResource\Pages;

use App\Filament\Resources\CinemaStudioResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCinemaStudio extends EditRecord
{
    protected static string $resource = CinemaStudioResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
