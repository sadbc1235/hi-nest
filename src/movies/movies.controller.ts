import { Controller, Get, Param } from '@nestjs/common';
import { Body, Delete, Patch, Post, Put, Query } from '@nestjs/common/decorators';
import { CreateMovieDto } from './dto/create-movie.dto';
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
    getOne(@Param("id") id: number): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.moviesService.deleteOne(id);
    }

    @Patch(':id')
    patch(@Param("id") id: number, @Body() updateData) {
        return this.moviesService.update(id, updateData);
    }
}
