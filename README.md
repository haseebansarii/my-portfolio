# Mohammad Haseeb - Portfolio Website

A modern, animated, and professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Animated Sections**: Engaging animations using Framer Motion
- **Contact Form**: Serverless email functionality using Nodemailer
- **SEO Optimized**: Meta tags and optimized performance
- **TypeScript**: Type-safe code for better development experience

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer with Vercel Serverless Functions
- **Theme**: Next-themes for dark/light mode

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
   Note: For Gmail, you'll need to use an App Password. See [Google's documentation](https://support.google.com/accounts/answer/185833?hl=en) for more details.

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running Production Build

```bash
npm run start
# or
yarn start
```

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add the environment variables
4. Deploy

## Customization

- Update personal information in the component files
- Replace placeholder images with your own images
- Modify color scheme in `tailwind.config.js`
- Add or remove sections as needed

## Project Structure

```
my-portfolio/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── api/        # API routes (serverless functions)
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── sections/   # Page sections
│   │   └── ui/         # UI components
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── .env.local          # Environment variables (create this file)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## License

This project is open source and available under the [MIT License](LICENSE).
