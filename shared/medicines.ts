import { Med } from './med';

export const MEDICINES: Med[] = [
    {
        id: '0',
        name: 'Azithromycin',
        image: '/assets/images/az.jpg',
        category: 'mains',
        featured: true,
        label: 'Tablet',
        price: '4.99',
        // tslint:disable-next-line:max-line-length
        description: 'Azithromycin is used to treat a wide variety of bacterial infections. It is a macrolide-type antibiotic.',
        comments: [
            {
                rating: 5,
                comment: 'Effective!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Fights bacterial infections!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Useful',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Consult doctor before use',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '1',
        name: 'Combiflam',
        image: '/assets/images/cm.jpg',
        category: 'appetizer',
        featured: false,
        label: '',
        price: '1.99',
        description: 'Combiflam Tablet contains two painkiller medicines',
        comments: [
            {
                rating: 5,
                comment: 'Effective!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Fights bacterial infections!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Useful',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Consult doctor before use',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '2',
        name: 'Crocin',
        image: '/assets/images/cr.jpg',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'Crocin Advance can be used for treatment of mild-to-moderate pain including: Muscle ache',
        comments: [
            {
                rating: 5,
                comment: 'Effective!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Fights bacterial infections!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Useful',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Consult doctor before use',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: '3',
        name: 'Penicillin',
        image: '/assets/images/pn.jpg',
        category: 'dessert',
        featured: false,
        label: '',
        price: '2.99',
        description: 'Penicillin V oral tablet is used to treat certain infections caused by bacteria',
        comments: [
            {
                rating: 5,
                comment: 'Effective!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Fights bacterial infections!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Useful',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'Consult doctor before use',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];
