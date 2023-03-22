import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { getToken } from 'src/commons/utils';
import { PhoneService } from '../phone/phone.service';

@Injectable()
export class EmailService {
  checkEmailValidation({ email }) {
    if (email === undefined || email.includes('@') === false) {
      return false;
    }
    return true;
  }

  async sendEmail({ email }) {
    // 이메일 내용
    const token = getToken();
    const url = 'http://localhost:3000';
    const emailTemplate = `
                      <h1>현대차 회원가입 인증메일</h1>
                      <hr />
                      <div>인증번호: ${token}</div>
                      <div>인증번호를 입력하세요.</div>
                      <a href="${url}/${token}">리다이렉션 url : ${url}/${token}</a>
              `;

    // 이메일 보내기
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_ID,
          pass: process.env.GMAIL_APP_PW,
        },
      });

      await transporter.sendMail({
        from: 'coghks0426@gmail.com',
        to: email,
        subject: '[제목 입력란]안녕하세요. 인증요청입니다.',
        html: emailTemplate,
      });
      return '이메일 전송 완료';
    } catch (error) {
      console.log('catch error :', error);
      return '에러';
    }
  }

  checkEmail() {}
}
