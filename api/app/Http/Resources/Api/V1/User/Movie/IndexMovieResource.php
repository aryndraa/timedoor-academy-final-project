<?php

namespace App\Http\Resources\Api\V1\User\Movie;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexMovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"    => $this->id,
            "title" => $this->title,
            "age_restriction" => $this->age_restriction,
            "duration" => $this->duration,
            "cover" => [
                "file_url" => $this->cover->file_url,
            ]
        ];
    }
}
