import { getActorById } from '@/app/_lib/data-service';
import ActorHero from '@/app/_components/ActorHero';
import CreditsList from '@/app/_components/CreditsList';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const actor = await getActorById(id);
  const title = 'Actor: ' + actor.name;

  return { title };
}

async function ActorPage({ params }: Props) {
  const { id } = params;

  const actor = await getActorById(id);

  return (
    <section className="mb-8">
      <ActorHero actor={actor} />
      <CreditsList movies={actor.credits} />
    </section>
  );
}

export default ActorPage;
