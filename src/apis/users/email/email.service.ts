import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

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
    const test = 'test';
    const emailTemplate = `
              <html>
                  <body>
                      <h1>이메일 내용을 이렇게 html 형식으로</h1>
                      <hr />
                      <div>테스트: ${test}</div>
                  </body>
              </html>`;

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
        subject: '제목을 입력하면 됨.',
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
