# Эрүүл Мэндийн Төв

Next.js дээр хийсэн төрийн байгууллагын мэдээллийн портал маягийн нүүр хуудас. Нүүр хуудас болон `Бидний тухай` хэсгээр Цогтцэций Эрүүл Мэндийн Төвийн мэдээллийг харуулна.

## Шаардлага

- Node.js LTS
- npm
- Git

## Анх удаа суулгах

```powershell
cd /d D:\eruulmendiintuv
npm install
```

PowerShell ашиглаж байвал:

```powershell
Set-Location D:\eruulmendiintuv
npm install
```

## Веб асаах

```powershell
cd /d D:\eruulmendiintuv
npm run dev
```

PowerShell дээр:

```powershell
Set-Location D:\eruulmendiintuv
npm run dev
```

Дараа нь browser дээр нээнэ:

```text
http://localhost:3000
```

## Build шалгах

```powershell
npm run build
```

## GitHub руу push хийх

Өөрчлөлтүүдээ шалгах:

```powershell
git status
```

Файлуудаа stage хийх:

```powershell
git add .
```

Commit хийх:

```powershell
git commit -m "update site"
```

GitHub руу push хийх:

```powershell
git push
```

Remote шинээр нэмэх хэрэгтэй бол:

```powershell
git remote add origin https://github.com/uujgiihdb1218-cyber/emt.git
git branch -M main
git push -u origin main
```

## Ашигтай командууд

```powershell
npm install       # dependencies суулгана
npm run dev       # development server асаана
npm run build     # production build шалгана
git status        # өөрчлөлтүүд харна
git add .         # бүх өөрчлөлт stage хийнэ
git commit -m "message"  # commit үүсгэнэ
git push          # GitHub руу илгээнэ
```