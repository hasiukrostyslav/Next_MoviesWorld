import type { Metadata } from 'next';
import { getActorById } from '@/app/_lib/data-service';
import ActorHero from '@/app/_components/ActorHero';
import CreditsList from '@/app/_components/CreditsList';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const actor = await getActorById(id);
  const title = 'Actor: ' + actor.name;

  return { title };
}

async function ActorPage({ params }: Props) {
  const id = (await params).id;

  const actor = await getActorById(id);

  return (
    <section className="mb-8">
      <ActorHero actor={actor} />
      <CreditsList movies={actor.credits} />
    </section>
  );
}

export default ActorPage;
