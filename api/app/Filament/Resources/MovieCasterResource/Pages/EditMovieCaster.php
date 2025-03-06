<?php

namespace App\Filament\Resources\MovieCasterResource\Pages;

use App\Filament\Resources\MovieCasterResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMovieCaster extends EditRecord
{
    protected static string $resource = MovieCasterResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
