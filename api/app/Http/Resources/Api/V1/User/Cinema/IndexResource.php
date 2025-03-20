<?php

namespace App\Http\Resources\Api\V1\User\Cinema;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "address" => $this->address,
            "country" => $this->country,
            "province" => $this->province,
            "opening_time" => \Carbon\Carbon::parse($this->opening_time)->format('H:i'),
            "closing_time" => \Carbon\Carbon::parse($this->closing_time)->format('H:i'),
            "picture" => [
                "file_link" => $this->picture->file_link,
            ],
            "studios" => $this->studio->map(fn ($studio) => [
                "id" => $studio->studio->id,
                "name" => $studio->studio->name,
            ])

        ];
    }
}
