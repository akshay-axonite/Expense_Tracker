import type { PresetCategory } from '@/core/category.ts';

export const DEFAULT_EXPENSE_CATEGORIES: PresetCategory[] = [
    {
        name: 'Salary',
        categoryIconId: '2000',
        color: '00796b',
        subCategories: [
            {
                name: 'Salary',
                categoryIconId: '2010',
                color: '00796b'
            }
        ]
    },
    {
        name: 'Office Rent',
        categoryIconId: '290',
        color: '3f51b5',
        subCategories: [
            {
                name: 'Rent',
                categoryIconId: '290',
                color: '3f51b5'
            }
        ]
    },
    {
        name: 'Utilities',
        categoryIconId: '271',
        color: 'f57c00',
        subCategories: [
            {
                name: 'Electricity',
                categoryIconId: '271',
                color: 'f57c00'
            },
            {
                name: 'Water',
                categoryIconId: '270',
                color: 'f57c00'
            },
            {
                name: 'Internet',
                categoryIconId: '440',
                color: 'f57c00'
            },
            {
                name: 'Phone',
                categoryIconId: '400',
                color: 'f57c00'
            }
        ]
    },
    {
        name: 'Office Supplies',
        categoryIconId: '1000',
        color: '795548',
        subCategories: [
            {
                name: 'Stationery',
                categoryIconId: '1000',
                color: '795548'
            },
            {
                name: 'Printing',
                categoryIconId: '241',
                color: '795548'
            }
        ]
    },
    {
        name: 'Travel',
        categoryIconId: '390',
        color: '0288d1',
        subCategories: [
            {
                name: 'Flights',
                categoryIconId: '390',
                color: '0288d1'
            },
            {
                name: 'Hotel',
                categoryIconId: '597',
                color: '0288d1'
            },
            {
                name: 'Local Transport',
                categoryIconId: '320',
                color: '0288d1'
            },
            {
                name: 'Fuel',
                categoryIconId: '341',
                color: '0288d1'
            }
        ]
    },
    {
        name: 'Food & Meals',
        categoryIconId: '1',
        color: 'ff5722',
        subCategories: [
            {
                name: 'Team Lunch',
                categoryIconId: '10',
                color: 'ff5722'
            },
            {
                name: 'Client Meals',
                categoryIconId: '2',
                color: 'ff5722'
            },
            {
                name: 'Tea & Coffee',
                categoryIconId: '196',
                color: 'ff5722'
            }
        ]
    },
    {
        name: 'Software & Subscriptions',
        categoryIconId: '1021',
        color: '673ab7',
        subCategories: [
            {
                name: 'Cloud',
                categoryIconId: '1022',
                color: '673ab7'
            },
            {
                name: 'Licenses',
                categoryIconId: '1021',
                color: '673ab7'
            },
            {
                name: 'Domains',
                categoryIconId: '1027',
                color: '673ab7'
            }
        ]
    },
    {
        name: 'Equipment & Hardware',
        categoryIconId: '431',
        color: '607d8b',
        subCategories: [
            {
                name: 'Laptops',
                categoryIconId: '431',
                color: '607d8b'
            },
            {
                name: 'Furniture',
                categoryIconId: '210',
                color: '607d8b'
            },
            {
                name: 'Repairs',
                categoryIconId: '250',
                color: '607d8b'
            }
        ]
    },
    {
        name: 'Maintenance & Repairs',
        categoryIconId: '250',
        color: '546e7a',
        subCategories: [
            {
                name: 'Facility Maintenance',
                categoryIconId: '251',
                color: '546e7a'
            }
        ]
    },
    {
        name: 'Miscellaneous',
        categoryIconId: '5000',
        color: '9e9e9e',
        subCategories: [
            {
                name: 'Miscellaneous',
                categoryIconId: '1010',
                color: '9e9e9e'
            }
        ]
    },
    {
        name: 'Marketing & Advertising',
        categoryIconId: '571',
        color: 'e91e63',
        subCategories: [
            {
                name: 'Marketing & Advertising',
                categoryIconId: '571',
                color: 'e91e63'
            }
        ]
    },
    {
        name: 'Professional Fees',
        categoryIconId: '990',
        color: '455a64',
        subCategories: [
            {
                name: 'CA',
                categoryIconId: '950',
                color: '455a64'
            },
            {
                name: 'Legal',
                categoryIconId: '990',
                color: '455a64'
            },
            {
                name: 'Consultants',
                categoryIconId: '5030',
                color: '455a64'
            }
        ]
    },
    {
        name: 'Taxes & Compliance',
        categoryIconId: '950',
        color: 'd32f2f',
        subCategories: [
            {
                name: 'GST',
                categoryIconId: '950',
                color: 'd32f2f'
            },
            {
                name: 'TDS',
                categoryIconId: '960',
                color: 'd32f2f'
            },
            {
                name: 'License Fees',
                categoryIconId: '540',
                color: 'd32f2f'
            }
        ]
    },
    {
        name: 'Insurance',
        categoryIconId: '560',
        color: '0097a7',
        subCategories: [
            {
                name: 'Insurance',
                categoryIconId: '560',
                color: '0097a7'
            }
        ]
    },
    {
        name: 'Training & Education',
        categoryIconId: '640',
        color: '8bc34a',
        subCategories: [
            {
                name: 'Training & Education',
                categoryIconId: '660',
                color: '8bc34a'
            }
        ]
    },
    {
        name: 'Recruitment',
        categoryIconId: '570',
        color: '00acc1',
        subCategories: [
            {
                name: 'Job Portal Fees',
                categoryIconId: '570',
                color: '00acc1'
            },
            {
                name: 'Agency Charges',
                categoryIconId: '901',
                color: '00acc1'
            }
        ]
    },
    {
        name: 'Bank Charges & Interest',
        categoryIconId: '900',
        color: 'ff8f00',
        subCategories: [
            {
                name: 'Bank Charges',
                categoryIconId: '930',
                color: 'ff8f00'
            },
            {
                name: 'Interest',
                categoryIconId: '970',
                color: 'ff8f00'
            }
        ]
    },
    {
        name: 'Employee Benefits',
        categoryIconId: '710',
        color: '4caf50',
        subCategories: [
            {
                name: 'Bonus',
                categoryIconId: '2020',
                color: '4caf50'
            },
            {
                name: 'PF Contribution',
                categoryIconId: '910',
                color: '4caf50'
            },
            {
                name: 'Medical',
                categoryIconId: '633',
                color: '4caf50'
            }
        ]
    },
    {
        name: 'Events & Celebrations',
        categoryIconId: '700',
        color: 'ab47bc',
        subCategories: [
            {
                name: 'Events & Celebrations',
                categoryIconId: '700',
                color: 'ab47bc'
            }
        ]
    }
];

export const DEFAULT_INCOME_CATEGORIES: PresetCategory[] = [
    {
        name: 'Occupational Earnings',
        categoryIconId: '2000',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Salary Income',
                categoryIconId: '2010',
                color: 'ff6b22'
            },
            {
                name: 'Bonus Income',
                categoryIconId: '2020',
                color: 'ff6b22'
            },
            {
                name: 'Overtime Pay',
                categoryIconId: '231',
                color: 'ff6b22'
            },
            {
                name: 'Side Job Income',
                categoryIconId: '2080',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Finance & Investment',
        categoryIconId: '900',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Investment Income',
                categoryIconId: '2100',
                color: 'ff9500'
            },
            {
                name: 'Rental Income',
                categoryIconId: '290',
                color: 'ff9500'
            },
            {
                name: 'Interest Income',
                categoryIconId: '970',
                color: 'ff9500'
            }
        ]
    },
    {
        name: 'Miscellaneous',
        categoryIconId: '1000',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Gift & Lucky Money',
                categoryIconId: '710',
                color: '8e8e93'
            },
            {
                name: 'Winnings Income',
                categoryIconId: '564',
                color: '8e8e93'
            },
            {
                name: 'Windfall',
                categoryIconId: '5200',
                color: '8e8e93'
            },
            {
                name: 'Other Income',
                categoryIconId: '3010',
                color: '8e8e93'
            }
        ]
    }
];

export const DEFAULT_TRANSFER_CATEGORIES: PresetCategory[] = [
    {
        name: 'General Transfer',
        categoryIconId: '4000',
        color: 'ff6b22',
        subCategories: [
            {
                name: 'Bank Transfer',
                categoryIconId: '900',
                color: 'ff6b22'
            },
            {
                name: 'Credit Card Repayment',
                categoryIconId: '980',
                color: 'ff6b22'
            },
            {
                name: 'Deposits & Withdrawals',
                categoryIconId: '981',
                color: 'ff6b22'
            }
        ]
    },
    {
        name: 'Loan & Debt',
        categoryIconId: '950',
        color: 'ff9500',
        subCategories: [
            {
                name: 'Borrowing Money',
                categoryIconId: '910',
                color: 'ff9500'
            },
            {
                name: 'Lending Money',
                categoryIconId: '290',
                color: 'ff9500'
            },
            {
                name: 'Repayment',
                categoryIconId: '930',
                color: 'ff9500'
            },
            {
                name: 'Debt Collection',
                categoryIconId: '5030',
                color: 'ff9500'
            }
        ]
    },
    {
        name: 'Miscellaneous',
        categoryIconId: '1000',
        color: '8e8e93',
        subCategories: [
            {
                name: 'Out-of-Pocket Expense',
                categoryIconId: '2010',
                color: '8e8e93'
            },
            {
                name: 'Reimbursement',
                categoryIconId: '920',
                color: '8e8e93'
            },
            {
                name: 'Other Transfer',
                categoryIconId: '4900',
                color: '8e8e93'
            }
        ]
    }
];
