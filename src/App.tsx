import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileCta } from '@/components/layout/MobileCta';
import { Blog } from '@/components/sections/Blog';
import { Booking } from '@/components/sections/Booking';
import { Clinic } from '@/components/sections/Clinic';
import { Doctors } from '@/components/sections/Doctors';
import { Hero } from '@/components/sections/Hero';
import { Materials } from '@/components/sections/Materials';
import { Services } from '@/components/sections/Services';
import { Stories } from '@/components/sections/Stories';
import { Trust } from '@/components/sections/Trust';

/**
 * Одностраничный лендинг: порядок секций повторяет путь пациента —
 * от первого впечатления к доверию, услугам и записи.
 */
export function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Trust />
        <Services />
        <Clinic />
        <Doctors />
        <Stories />
        <Blog />
        <Booking />
        <Materials />
      </main>

      <Footer />
      <MobileCta />
    </>
  );
}
