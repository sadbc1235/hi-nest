import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") id: string): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.moviesService.deleteOne(id);
    }

    @Patch(':id')
    patch(@Param("id") id: string, @Body() updateData) {
        return {
            updatedMovie: id,
            ...updateData
        }
    }
}
