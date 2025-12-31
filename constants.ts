
import { Region, Place, Food } from './types';

export const VIETNAM_PLACES: Place[] = [
  {
    id: 'hanoi',
    name: 'Hanoi',
    region: Region.NORTH,
    description: 'The historic and charming capital of Vietnam, known for its centuries-old architecture and rich culture.',
    climate: 'Tropical monsoon with 4 seasons. Hot summers, cold winters.',
    bestTime: 'September to November or March to April.',
    image: 'https://picsum.photos/seed/hanoi/800/600',
    rating: 4.8,
    topSpots: [
      { name: 'Old Quarter', image: 'https://picsum.photos/seed/oldquarter/400/300', rating: 4.9 },
      { name: 'Hoan Kiem Lake', image: 'https://picsum.photos/seed/hoankiem/400/300', rating: 4.8 },
      { name: 'Temple of Literature', image: 'https://picsum.photos/seed/temple/400/300', rating: 4.7 }
    ],
    specialties: ['Bun Cha', 'Pho Bo', 'Egg Coffee', 'Cha Ca La Vong'],
    festivals: ['Lunar New Year (Tet)', 'Mid-Autumn Festival']
  },
  {
    id: 'danang',
    name: 'Da Nang',
    region: Region.CENTRAL,
    description: 'A modern coastal city known for its sandy beaches and history as a colonial port.',
    climate: 'Tropical monsoon climate, two seasons: wet and dry.',
    bestTime: 'February to August.',
    image: 'https://picsum.photos/seed/danang/800/600',
    rating: 4.7,
    topSpots: [
      { name: 'Marble Mountains', image: 'https://picsum.photos/seed/marble/400/300', rating: 4.6 },
      { name: 'Dragon Bridge', image: 'https://picsum.photos/seed/dragon/400/300', rating: 4.8 },
      { name: 'Ba Na Hills', image: 'https://picsum.photos/seed/banahills/400/300', rating: 4.9 }
    ],
    specialties: ['Mi Quang', 'Banh Xeo', 'Seafood'],
    festivals: ['Da Nang International Fireworks Festival']
  },
  {
    id: 'hcmc',
    name: 'Ho Chi Minh City',
    region: Region.SOUTH,
    description: 'The energetic economic hub of Vietnam, formerly known as Saigon.',
    climate: 'Tropical climate, distinct wet and dry seasons.',
    bestTime: 'December to April.',
    image: 'https://picsum.photos/seed/saigon/800/600',
    rating: 4.6,
    topSpots: [
      { name: 'War Remnants Museum', image: 'https://picsum.photos/seed/war/400/300', rating: 4.7 },
      { name: 'Notre Dame Cathedral', image: 'https://picsum.photos/seed/cathedral/400/300', rating: 4.5 },
      { name: 'Ben Thanh Market', image: 'https://picsum.photos/seed/market/400/300', rating: 4.4 }
    ],
    specialties: ['Com Tam', 'Banh Mi Saigon', 'Hu Tieu'],
    festivals: ['Nguyen Hue Flower Street']
  }
];

export const FOOD_LIST: Food[] = [
  {
    id: 'f1',
    name: 'Pho Bo (Beef Noodle Soup)',
    region: Region.NORTH,
    image: 'https://picsum.photos/seed/pho/400/300',
    description: 'The quintessential Vietnamese dish, delicate broth with rice noodles and tender beef.',
    priceRange: '40,000 - 100,000 VND',
    type: 'Street Food',
    tags: ['Must-try', 'Classic'],
    recommendedPlaces: [
      { name: 'Pho Gia Truyen', address: '49 Bat Dan, Hanoi', link: 'https://maps.google.com' }
    ]
  },
  {
    id: 'f2',
    name: 'Banh Mi',
    region: Region.SOUTH,
    image: 'https://picsum.photos/seed/banhmi/400/300',
    description: 'A fusion baguette sandwich with various meats, pate, and pickled vegetables.',
    priceRange: '20,000 - 60,000 VND',
    type: 'Street Food',
    tags: ['Must-try', 'Quick'],
    recommendedPlaces: [
      { name: 'Banh Mi Huynh Hoa', address: '26 Le Thi Rieng, HCMC' }
    ]
  }
];

export const REGION_COLORS = {
  [Region.NORTH]: 'fill-red-400 hover:fill-red-500',
  [Region.CENTRAL]: 'fill-yellow-400 hover:fill-yellow-500',
  [Region.SOUTH]: 'fill-green-400 hover:fill-green-500'
};
