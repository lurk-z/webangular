# Positivus Angular Website

เว็บ Digital Marketing Agency ที่ทำด้วย Angular 21 ตามดีไซน์ที่ให้มา มีหลายหน้า, routing, asset ภาพประกอบ, responsive layout และฟอร์ม Request a quote ที่ submit แล้วบันทึกข้อมูลลง `localStorage`

## วิธีรัน

ติดตั้ง dependencies แล้วจากในโฟลเดอร์โปรเจกต์ให้รัน:

```bash
npm.cmd start
```

จากนั้นเปิด:

```text
http://localhost:4200
```

หมายเหตุสำหรับ Windows PowerShell: ใช้ `npm.cmd` แทน `npm` เพื่อเลี่ยงปัญหา execution policy ที่บล็อกไฟล์ `npm.ps1`

## คำสั่งที่ใช้บ่อย

Build production:

```bash
npm.cmd run build
```

Run unit tests:

```bash
npm.cmd test -- --watch=false
```

## ฟอร์ม Submit

หน้า `Request a quote` ตรวจ validation ของข้อมูลสำคัญ และเมื่อ submit สำเร็จจะสร้างเลขอ้างอิง เช่น `POS-20260418-ABCDE` พร้อมบันทึก submission ลง `localStorage` key:

```text
positivusQuoteSubmissions
```
