<?php

namespace App\Http\Resources\Api\V1\User\Movie;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowMovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"              => $this->id,
            "title"           => $this->title,
            "genre"           => $this->genre,
            "age_restriction" => $this->age_restriction,
            "duration"        => $this->duration,
            "language"        => $this->language,
            "synopsis"        => $this->synopsis,
            "author"          => $this->author,
            "cover"           => [
                "file_url" => $this->cover->file_url,
            ],
            "casters"         => $this->casters->map(function ($caster) {
                return [
                    "id"      => $caster->id,
                    "name"    => $caster->name,
                    "picture" => [
                        "file_url" => $caster->picture->file_url,
                    ]
                ];
            })
        ];
    }
}
