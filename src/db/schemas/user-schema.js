import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      default: '000-1234-1234', //테스트 임시 데이터
    },
    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
          address3: String,
        },
        {
          _id: false,
        }
      ),
      default: '12121서울특별시동대문구휘경2동', //테스트 임시 데이터
      required: false,
    },
    gender: {
      type: String,
      required: false,
      default: 'male', //테스트 임시 데이터
    },
    birthday: {
      type: String,
      required: false,
      default: '19000000', //테스트 임시 데이터
    },
    role: {
      type: String,
      required: false,
      default: 'basic-user', //테스트 임시 데이터
    },
  },
  {
    collection: 'User-info',
    timestamps: true,
  }
);

export { UserSchema };
