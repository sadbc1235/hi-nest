import { Controller, Get, Param } from '@nestjs/common';
import { Delete, Post } from '@nestjs/common/decorators';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return `This will return One movie width the id: ${id}`
    }

    @Post()
    create(){
        return 'This will create a movie';
    }

    @Delete("/:id")
    remove(@Param("id") id: string) {
        return `This will delete a movie width the id: ${id}`
    }
}
