export async function generateMetadata({ params }: { [key: string]: any }) {
  return {
    title: 'About',
    description: 'Generated by create next app',
  }
}

export default async function About() {
  return <span>About</span>
}
