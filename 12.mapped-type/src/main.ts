type DeviceFormatter<T> = {
  // 'manufacturer' | 'price'
  [K in keyof T]: T[K];
};

type Device = {
  manufacturer: string;
  price: number;
};

const iphone: DeviceFormatter<Device> = { manufacturer: "apple", price: 100 };

// 만약 객체에서 가격이나 제조사만 있거나, 둘다 없는 경우에는?
// [K in keyof T]?: T[K];
