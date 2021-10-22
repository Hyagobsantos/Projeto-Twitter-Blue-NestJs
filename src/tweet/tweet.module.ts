import { Module } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { TweetController } from './tweet.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TweetController],
  providers: [TweetService,PrismaService]
})
export class TweetModule {}
