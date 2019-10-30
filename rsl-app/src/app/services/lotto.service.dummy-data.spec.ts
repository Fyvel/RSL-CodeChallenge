export const dummyDraws = {
  Draws: [
    {
      ProductId: 'MonWedLotto',
      DrawNumber: 3917,
      DrawDisplayName: 'Mon & Wed Lotto $1,000,000',
      DrawDate: '2019-10-30T00:00:00',
      DrawLogoUrl: 'http://media.tatts.com/TattsServices/Lotto/Products/MonWedTattsLotto_v1.png',
      DrawType: 'BaseWeek',
      Div1Amount: 1000000,
      IsDiv1Estimated: false,
      IsDiv1Unknown: false,
      DrawCloseDateTimeUTC: '2019-10-30T09:35:00',
      DrawEndSellDateTimeUTC: '2019-10-30T09:30:00',
      DrawCountDownTimerSeconds: 2363
    },
    {
      ProductId: 'SetForLife',
      DrawNumber: 1546,
      DrawDisplayName: 'Set for Life $4,800,000',
      DrawDate: '2019-10-30T00:00:00',
      DrawLogoUrl: 'http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png',
      DrawType: 'BaseWeek',
      Div1Amount: 4800000,
      IsDiv1Estimated: false,
      IsDiv1Unknown: false,
      DrawCloseDateTimeUTC: '2019-10-30T11:05:00',
      DrawEndSellDateTimeUTC: '2019-10-30T11:00:00',
      DrawCountDownTimerSeconds: 7763
    },
    {
      ProductId: 'Powerball',
      DrawNumber: 1224,
      DrawDisplayName: 'Powerball $12,000,000',
      DrawDate: '2019-10-31T00:00:00',
      DrawLogoUrl: 'http://media.tatts.com/TattsServices/Lotto/Products/Powerball_v1.png',
      DrawType: 'Jackpot',
      Div1Amount: 12000000,
      IsDiv1Estimated: false,
      IsDiv1Unknown: false,
      DrawCloseDateTimeUTC: '2019-10-31T09:35:00',
      DrawEndSellDateTimeUTC: '2019-10-31T09:30:00',
      DrawCountDownTimerSeconds: 88763
    },
    {
      ProductId: 'SetForLife',
      DrawNumber: 1547,
      DrawDisplayName: 'Set for Life $4,800,000',
      DrawDate: '2019-10-31T00:00:00',
      DrawLogoUrl: 'http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png',
      DrawType: 'BaseWeek',
      Div1Amount: 4800000,
      IsDiv1Estimated: false,
      IsDiv1Unknown: false,
      DrawCloseDateTimeUTC: '2019-10-31T11:05:00',
      DrawEndSellDateTimeUTC: '2019-10-31T11:00:00',
      DrawCountDownTimerSeconds: 94163
    }
  ],
  ErrorInfo: null,
  Success: true
};
export const expectedDraws = [
  {
    drawDisplayName: 'Mon & Wed Lotto $1,000,000',
    logoImage: 'http://media.tatts.com/TattsServices/Lotto/Products/MonWedTattsLotto_v1.png',
    drawDate: '2019-10-30T00:00:00',
    drawTime: '2019-10-30T09:30:00',
    drawNumber: 3917
  },
  {
    drawDisplayName: 'Set for Life $4,800,000',
    logoImage: 'http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png',
    drawDate: '2019-10-30T00:00:00',
    drawTime: '2019-10-30T11:00:00',
    drawNumber: 1546
  },
  {
    drawDisplayName: 'Powerball $12,000,000',
    logoImage: 'http://media.tatts.com/TattsServices/Lotto/Products/Powerball_v1.png',
    drawDate: '2019-10-31T00:00:00',
    drawTime: '2019-10-31T09:30:00',
    drawNumber: 1224
  },
  {
    drawDisplayName: 'Set for Life $4,800,000',
    logoImage: 'http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png',
    drawDate: '2019-10-31T00:00:00',
    drawTime: '2019-10-31T11:00:00',
    drawNumber: 1547
  }
];

export const dummyResults = {
  DrawResults: [
    {
      ProductId: 'TattsLotto',
      DrawNumber: 3325,
      DrawDate: '2013-06-01T00:00:00',
      DrawDisplayName: 'TattsLotto Draw 3325',
      DrawLogoUrl: 'http://tim.media.tatts.com/TattsServices/Lotto/Products/TattsLotto_v1.png',
      PrimaryNumbers: [
        15,
        30,
        37,
        12,
        40,
        44
      ],
      SecondaryNumbers: [
        16,
        45
      ],
      TicketNumbers: null,
      Dividends: [
        {
          Division: 1,
          BlocNumberOfWinners: 1,
          BlocDividend: 4154606.0600,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 0,
          CompanyDividend: 4154606.0600,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        },
        {
          Division: 2,
          BlocNumberOfWinners: 43,
          BlocDividend: 13127.6000,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 16,
          CompanyDividend: 13127.6000,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        },
        {
          Division: 3,
          BlocNumberOfWinners: 986,
          BlocDividend: 1235.4000,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 357,
          CompanyDividend: 1235.4000,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        },
        {
          Division: 4,
          BlocNumberOfWinners: 51798,
          BlocDividend: 35.5500,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 19089,
          CompanyDividend: 35.5500,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        },
        {
          Division: 5,
          BlocNumberOfWinners: 127951,
          BlocDividend: 24.1500,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 47715,
          CompanyDividend: 24.1500,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        },
        {
          Division: 6,
          BlocNumberOfWinners: 254714,
          BlocDividend: 15.6500,
          CompanyId: 'Tattersalls',
          CompanyNumberOfWinners: 92439,
          CompanyDividend: 15.6500,
          PoolTransferType: 'NONE',
          PoolTransferredTo: 0
        }
      ]
    }
  ],
  ErrorInfo: null,
  Success: true
};

export const expectedResults = [
  {
    productDisplayName: 'TattsLotto Draw 3325',
    logoImage: 'http://tim.media.tatts.com/TattsServices/Lotto/Products/TattsLotto_v1.png',
    drawDate: '2013-06-01T00:00:00',
    drawNumber: 3325,
    primaryNumbers: [
      15,
      30,
      37,
      12,
      40,
      44
    ],
    secondaryNumbers: [
      16,
      45
    ],
    dividends: [
      {
        Division: 1,
        BlocNumberOfWinners: 1,
        BlocDividend: 4154606.06,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 0,
        CompanyDividend: 4154606.06,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      },
      {
        Division: 2,
        BlocNumberOfWinners: 43,
        BlocDividend: 13127.6,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 16,
        CompanyDividend: 13127.6,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      },
      {
        Division: 3,
        BlocNumberOfWinners: 986,
        BlocDividend: 1235.4,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 357,
        CompanyDividend: 1235.4,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      },
      {
        Division: 4,
        BlocNumberOfWinners: 51798,
        BlocDividend: 35.55,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 19089,
        CompanyDividend: 35.55,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      },
      {
        Division: 5,
        BlocNumberOfWinners: 127951,
        BlocDividend: 24.15,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 47715,
        CompanyDividend: 24.15,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      },
      {
        Division: 6,
        BlocNumberOfWinners: 254714,
        BlocDividend: 15.65,
        CompanyId: 'Tattersalls',
        CompanyNumberOfWinners: 92439,
        CompanyDividend: 15.65,
        PoolTransferType: 'NONE',
        PoolTransferredTo: 0
      }
    ]
  }
];
