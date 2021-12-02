var sValueRules = [
  [
    'S1 represents the total number of modules',
    'S1 cannot be a negative number or 0',
    'S1 must be greater than S2, S3, and S7'
  ],

  [
    'S2 represents the number of modules that rely on correct data input from the source or for produce data to be used elsewhere',
    'S2 cannot be a negative number',
    'S2 must be smaller than S1'
  ],

  [
    'S3 represents the number of modules that rely on prior processing',
    'S3 cannot be a negative number',
    'S3 must be smaller than S1'
  ],

  [
    'S4 represents the number of database items',
    'S4 cannot be a negative number and must be greater than 0',
    'S4 needs to be greater than S5 and S6'
  ],

  [
    'S5 represents the total number of unique database items',
    'S5 cannot be a negative number and must have a value smaller than S4'
  ],

  [
    'S6 represents the total number of segments in the database',
    'S6 cannot be a negative number and must have a value smaller than S4'
  ],

  [
    'S7 represents the number of modules with a single entry and exit point',
    'S7 cannot be a negative number and must have a value smaller than S1'
  ],

  [
    'If your program uses a data-oriented or object oriented architectural design approach, then it uses the distinct method.',
    'The distinct method box will set the D1 value (on the next page) either to 1 or 0 on the next page',
    'Checking this box means that the distinct method will be used and the D1 value will be set to 1',
    'If this box is left unchecked, then the distinct method will not be used and the D1 value will be 0'
  ]

]; // Store rules that each s value must abide by

export { sValueRules }; 