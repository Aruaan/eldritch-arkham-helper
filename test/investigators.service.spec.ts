import { Test, TestingModule } from '@nestjs/testing'
import { InvestigatorsService } from '../src/investigators/investigators.service'

describe('InvestigatorsService', () => {
  let service: InvestigatorsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestigatorsService],
    }).compile()

    service = module.get<InvestigatorsService>(InvestigatorsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
