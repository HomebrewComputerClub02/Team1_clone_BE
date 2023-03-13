import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HighlightDetail } from './detail/highlight_detail.entity';

@Injectable()
export class HighlightService {}
