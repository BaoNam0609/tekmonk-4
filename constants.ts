
import { Region, Place, Food } from './types';

export const VIETNAM_PLACES: Place[] = [
  {
    id: 'hanoi',
    name: 'Thủ đô Hà Nội',
    region: Region.NORTH,
    description: 'Trái tim của Việt Nam, nơi giao thoa giữa vẻ đẹp cổ kính nghìn năm văn hiến và nhịp sống hiện đại hối hả.',
    climate: 'Nhiệt đới gió mùa với 4 mùa rõ rệt.',
    bestTime: 'Tháng 9 - Tháng 11 (Mùa thu Hà Nội).',
    image: 'https://images.unsplash.com/photo-1509030464150-14405511003f?q=80&w=800',
    rating: 4.9,
    topSpots: [
      { name: 'Phố Cổ Hà Nội', image: 'https://images.unsplash.com/photo-1555930058-2977464a93a0?q=80&w=400', rating: 4.8 },
      { name: 'Hồ Hoàn Kiếm', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=400', rating: 4.9 }
    ],
    specialties: ['Phở Bò', 'Bún Chả', 'Cà Phê Trứng'],
    festivals: ['Tết Nguyên Đán', 'Lễ hội Chùa Hương']
  },
  {
    id: 'halong',
    name: 'Vịnh Hạ Long',
    region: Region.NORTH,
    description: 'Kỳ quan thiên nhiên thế giới với hàng ngàn đảo đá vôi kỳ vĩ mọc lên từ làn nước xanh ngọc bích.',
    climate: 'Thời tiết biển, mùa đông lạnh nhẹ.',
    bestTime: 'Tháng 4 - Tháng 6.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800',
    rating: 5.0,
    topSpots: [
      { name: 'Hang Sửng Sốt', image: 'https://images.unsplash.com/photo-1544158428-1329c3226be0?q=80&w=400', rating: 4.9 },
      { name: 'Đảo Ti Tốp', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400', rating: 4.8 }
    ],
    specialties: ['Chả mực Hạ Long', 'Sá sùng'],
    festivals: ['Carnival Hạ Long']
  },
  {
    id: 'hue',
    name: 'Cố đô Huế',
    region: Region.CENTRAL,
    description: 'Thành phố của những di sản triều Nguyễn, mang vẻ đẹp trầm mặc, nên thơ bên dòng sông Hương.',
    climate: 'Nhiệt đới, mưa nhiều vào cuối năm.',
    bestTime: 'Tháng 1 - Tháng 4.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800',
    rating: 4.8,
    topSpots: [
      { name: 'Đại Nội Huế', image: 'https://images.unsplash.com/photo-1599427303058-f06cbdf4bb91?q=80&w=400', rating: 4.9 },
      { name: 'Lăng Khải Định', image: 'https://images.unsplash.com/photo-1571498664957-f223297607ab?q=80&w=400', rating: 4.8 }
    ],
    specialties: ['Bún bò Huế', 'Cơm hến', 'Bánh bột lọc'],
    festivals: ['Festival Huế']
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: Region.CENTRAL,
    description: 'Thành phố đáng sống với những bãi biển quyến rũ, cây cầu rồng phun lửa và khu du lịch Bà Nà Hills.',
    climate: 'Nhiệt đới, mát mẻ từ biển.',
    bestTime: 'Tháng 2 - Tháng 8.',
    image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=800',
    rating: 4.7,
    topSpots: [
      { name: 'Cầu Vàng (Ba Na)', image: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=400', rating: 5.0 },
      { name: 'Ngũ Hành Sơn', image: 'https://images.unsplash.com/photo-1570733117311-d990c53ce947?q=80&w=400', rating: 4.7 }
    ],
    specialties: ['Mì Quảng', 'Bánh tráng cuốn thịt heo'],
    festivals: ['Lễ hội pháo hoa quốc tế DIFF']
  },
  {
    id: 'hoian',
    name: 'Hội An',
    region: Region.CENTRAL,
    description: 'Thương cảng cổ sầm uất với những ngôi nhà vàng rực rỡ và lồng đèn treo khắp phố phường.',
    climate: 'Ấm áp, ít biến động mạnh.',
    bestTime: 'Tháng 2 - Tháng 4.',
    image: 'https://images.unsplash.com/photo-1599708153386-62e2d0903332?q=80&w=800',
    rating: 4.9,
    topSpots: [
      { name: 'Chùa Cầu', image: 'https://images.unsplash.com/photo-1588014023410-672535032e4d?q=80&w=400', rating: 4.8 },
      { name: 'Dòng Sông Hoài', image: 'https://images.unsplash.com/photo-1581635392471-13728615a133?q=80&w=400', rating: 4.9 }
    ],
    specialties: ['Cao lầu', 'Cơm gà Hội An'],
    festivals: ['Lễ hội đêm rằm phố cổ']
  },
  {
    id: 'nhatrang',
    name: 'Nha Trang',
    region: Region.CENTRAL,
    description: 'Thiên đường nghỉ dưỡng biển với những vịnh biển đẹp nhất thế giới và các khu vui chơi hiện đại.',
    climate: 'Nắng ấm quanh năm.',
    bestTime: 'Tháng 1 - Tháng 9.',
    image: 'https://images.unsplash.com/photo-1563297050-48419614f177?q=80&w=800',
    rating: 4.7,
    topSpots: [
      { name: 'VinWonders', image: 'https://images.unsplash.com/photo-1610484144365-f9828e8316c0?q=80&w=400', rating: 4.8 },
      { name: 'Tháp Bà Ponagar', image: 'https://images.unsplash.com/photo-1594142404563-64cccaf5a10f?q=80&w=400', rating: 4.7 }
    ],
    specialties: ['Bún chả cá', 'Nem nướng'],
    festivals: ['Festival Biển Nha Trang']
  },
  {
    id: 'dalat',
    name: 'Đà Lạt',
    region: Region.SOUTH,
    description: 'Thành phố mù sương với rừng thông bạt ngàn và những vườn hoa nở rộ quanh năm.',
    climate: 'Ôn đới, mát mẻ quanh năm.',
    bestTime: 'Tháng 11 - Tháng 3.',
    image: 'https://images.unsplash.com/photo-1581390129939-946f9a893447?q=80&w=800',
    rating: 4.8,
    topSpots: [
      { name: 'Hồ Xuân Hương', image: 'https://images.unsplash.com/photo-1598018554490-256143c7b80a?q=80&w=400', rating: 4.9 },
      { name: 'Thung lũng Tình yêu', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400', rating: 4.7 }
    ],
    specialties: ['Lẩu gà lá é', 'Bánh tráng nướng'],
    festivals: ['Festival Hoa Đà Lạt']
  },
  {
    id: 'hcmc',
    name: 'TP. Hồ Chí Minh',
    region: Region.SOUTH,
    description: 'Đô thị năng động nhất Việt Nam, nơi hội tụ của kinh tế, văn hóa và giải trí.',
    climate: 'Nhiệt đới, 2 mùa mưa nắng rõ rệt.',
    bestTime: 'Tháng 12 - Tháng 4.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800',
    rating: 4.6,
    topSpots: [
      { name: 'Dinh Độc Lập', image: 'https://images.unsplash.com/photo-1559592443-7f87a79f6cae?q=80&w=400', rating: 4.7 },
      { name: 'Nhà Thờ Đức Bà', image: 'https://images.unsplash.com/photo-1555930058-2977464a93a0?q=80&w=400', rating: 4.8 }
    ],
    specialties: ['Cơm tấm', 'Hủ tiếu Nam Vang', 'Bánh mì Sài Gòn'],
    festivals: ['Đường hoa Nguyễn Huệ']
  },
  {
    id: 'phuquoc',
    name: 'Đảo Phú Quốc',
    region: Region.SOUTH,
    description: 'Đảo Ngọc với những bãi cát trắng mịn, nước biển trong vắt và hải sản tươi ngon.',
    climate: 'Nhiệt đới biển.',
    bestTime: 'Tháng 11 - Tháng 4.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=800',
    rating: 4.9,
    topSpots: [
      { name: 'Bãi Sao', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=400', rating: 4.9 },
      { name: 'Chợ Đêm Phú Quốc', image: 'https://images.unsplash.com/photo-1563297050-48419614f177?q=80&w=400', rating: 4.8 }
    ],
    specialties: ['Bún quậy', 'Gỏi cá trích', 'Nước mắm Phú Quốc'],
    festivals: ['Lễ hội Nghinh Ông']
  }
];

export const FOOD_LIST: Food[] = [
  {
    id: 'f1',
    name: 'Phở Bò (Beef Noodle Soup)',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=600',
    description: 'Món ăn quốc hồn quốc túy của Việt Nam, nước dùng thanh ngọt nấu từ xương bò.',
    priceRange: '45,000 - 90,000 VND',
    type: 'Street Food',
    tags: ['Must-try', 'Classic'],
    recommendedPlaces: [
      { name: 'Phở Thìn Lò Đúc', address: '13 Lò Đúc, Hà Nội' }
    ]
  },
  {
    id: 'f2',
    name: 'Bánh Mì Việt Nam',
    region: Region.SOUTH,
    image: 'https://images.unsplash.com/photo-1600454021970-351feb4a5014?q=80&w=600',
    description: 'Sự kết hợp hoàn hảo giữa lớp vỏ giòn tan và nhân thịt, pate, đồ chua đậm đà.',
    priceRange: '20,000 - 55,000 VND',
    type: 'Street Food',
    tags: ['Must-try', 'Quick'],
    recommendedPlaces: [
      { name: 'Bánh Mì Huynh Hoa', address: '26 Lê Thị Riêng, TP.HCM' }
    ]
  },
  {
    id: 'f3',
    name: 'Bún Chả Hà Nội',
    region: Region.NORTH,
    image: 'https://images.unsplash.com/photo-1564844534614-b59f5f169f3c?q=80&w=600',
    description: 'Thịt nướng than thơm lừng ăn cùng bún tươi và nước mắm chua ngọt đặc trưng.',
    priceRange: '40,000 - 70,000 VND',
    type: 'Street Food',
    tags: ['Smoky', 'Authentic'],
    recommendedPlaces: [
      { name: 'Bún Chả Hương Liên (Obama)', address: '24 Lê Văn Hưu, Hà Nội' }
    ]
  }
];

export const REGION_COLORS = {
  [Region.NORTH]: 'fill-red-400 hover:fill-red-500',
  [Region.CENTRAL]: 'fill-yellow-400 hover:fill-yellow-500',
  [Region.SOUTH]: 'fill-green-400 hover:fill-green-500'
};
