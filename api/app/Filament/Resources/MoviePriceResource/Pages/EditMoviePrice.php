<?php

namespace App\Filament\Resources\MoviePriceResource\Pages;

use App\Filament\Resources\MoviePriceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMoviePrice extends EditRecord
{
    protected static string $resource = MoviePriceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
