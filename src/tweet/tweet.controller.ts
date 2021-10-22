import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { Tweet } from '.prisma/client';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  create(@Body() createTweetDto: CreateTweetDto): Promise<Tweet> {
    return this.tweetService.create(createTweetDto);
  }

  @Delete(':id')
  deletarSeguidor(@Param('id') id: string): Promise<Tweet> {
    return this.tweetService.deleteTweet(+id);
  }
}
