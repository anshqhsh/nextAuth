import KakaoProvider from 'next-auth/providers/kakao';
import type { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        username: {
          label: 'email',
          type: 'text',
          placeholder: 'test@test.com',
        },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = { id: '1', name: 'ian', email: 'ian@example.com' };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET as string,
    }),
  ],
};
