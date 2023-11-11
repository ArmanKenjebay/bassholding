import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale }
}) {
  const dictionary = await getDictionary(locale)

  return (
    <section className="flex flex-col h-full">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et
      officia repudiandae veniam voluptatibus. Accusamus accusantium aliquam,
      animi, aperiam architecto atque aut commodi cumque, distinctio esse eum
      facere ipsum iusto molestiae quaerat qui quibusdam quo repellendus rerum
      sapiente sequi tenetur veniam! A ad adipisci amet aspernatur consectetur
      cum eaque earum eius eos eum facere illo inventore ipsam iure libero
      maxime minima nam non odio placeat, porro quas tempore velit vero
      voluptatum. Cupiditate, earum ex. Ab accusantium animi aperiam architecto
      autem consequuntur culpa debitis distinctio dolor eos error ex magnam
      minus officiis optio provident quae quaerat quam quos soluta, tempora
      voluptates, voluptatibus? Accusantium aliquam commodi deserunt earum
      explicabo fugit iusto natus necessitatibus ullam voluptatem? At illo
      laudantium reiciendis rem. Accusamus animi at dicta excepturi
      exercitationem ipsa necessitatibus placeat temporibus. Alias amet atque
      cum, ea iste modi mollitia natus neque, officia possimus quaerat repellat
      vel. Dolorum iure necessitatibus neque, nisi quos tenetur vero voluptate!
      Et, mollitia, tenetur. Amet consequatur corporis cum, dolorem, dolorum
      explicabo libero minima necessitatibus nostrum numquam obcaecati odio
      placeat praesentium, quam sequi velit voluptate. Architecto assumenda
      atque blanditiis dolore ea suscipit tempora voluptate. Dicta excepturi
      expedita ipsa officia quam saepe? Aperiam doloribus ducimus enim libero
      mollitia, nostrum porro quod. Dolorem doloremque ducimus error harum
      laboriosam ratione recusandae, voluptatibus? Accusantium aperiam
      architecto asperiores, consequatur culpa cum cumque delectus deserunt
      distinctio dolor dolore ducimus esse eum eveniet explicabo facere fugit id
      ipsum iste magni nam nihil nulla numquam omnis optio pariatur perspiciatis
      porro quaerat qui quis reprehenderit sed soluta sunt tenetur, veritatis
      vero voluptates! Ad atque cupiditate deserunt dolore dolorem eum excepturi
      fuga inventore iste magnam nam neque nihil nulla odit omnis, quia
      recusandae saepe sit, sunt ullam! Adipisci aspernatur atque deleniti,
      dicta dolore ducimus eveniet facere impedit iure labore non praesentium
      quod ratione reiciendis reprehenderit sapiente velit veritatis.
      Accusantium aperiam delectus, dicta distinctio eveniet facere illum ipsum
      molestiae molestias necessitatibus odit officia omnis optio quae quidem
      quis quo reiciendis sapiente ullam voluptatum? Beatae, fugiat inventore
      iste numquam obcaecati ratione. Ab accusamus accusantium animi aspernatur
      at atque cum dignissimos dolor dolore dolorem doloremque doloribus eius
      error facilis impedit incidunt inventore ipsa iste iure laboriosam magnam
      magni minus, modi nobis odit officia possimus quam quo vel vero voluptate
      voluptates voluptatibus voluptatum! Ad amet architecto aspernatur at aut
      beatae cupiditate deleniti dicta dolor dolorem doloremque earum eligendi
      eos est eveniet exercitationem expedita explicabo harum illum impedit in
      ipsam libero magnam maiores modi nulla obcaecati odit possimus quisquam
      ratione recusandae, rerum sed sit soluta totam voluptas voluptatibus.
      Alias asperiores at aut dicta dolore earum, eius eos esse et excepturi
      facilis incidunt itaque minus provident quae quia quisquam voluptatibus?
      Aliquam asperiores aspernatur assumenda commodi consectetur cupiditate
      dignissimos distinctio dolore eius enim excepturi facilis incidunt
      inventore itaque labore laudantium magnam molestias mollitia nesciunt
      nihil officiis quaerat quasi quibusdam, saepe velit veniam veritatis
      voluptatem! Aliquid atque consectetur consequuntur eius eos est illum
      incidunt inventore ipsa, ipsum molestiae molestias nesciunt non, odit
      perspiciatis sit voluptas voluptates! Ab accusamus asperiores aspernatur,
      autem consectetur culpa cum delectus deleniti eius enim expedita harum hic
      illum inventore iure laborum libero mollitia nam necessitatibus neque
      nesciunt obcaecati omnis optio praesentium provident quae quas quibusdam
      quisquam rerum tenetur ullam unde ut vel velit veritatis vero voluptatem.
      Accusamus aperiam deserunt dignissimos, ea facere inventore iste magnam
      magni necessitatibus nihil nobis quam sit voluptates. A alias aliquam
      aliquid amet beatae cupiditate deleniti deserunt, dolore eum excepturi
      exercitationem fuga impedit itaque laboriosam, magni maxime minus nemo
      neque possimus quam quasi reiciendis sit vitae voluptas voluptatum. A
      assumenda dicta harum in ipsum nesciunt nisi non obcaecati repellendus
      sint. Aut cum, debitis doloremque eius ex, inventore iste itaque iusto
      numquam quibusdam, quis sint temporibus! Adipisci animi asperiores
      consectetur debitis deleniti dicta doloribus earum, ex illum ipsam
      laboriosam magni non numquam, porro quae quas quasi quibusdam quo quos
      ratione, sed ullam vel veniam! Adipisci alias, assumenda cumque doloremque
      eius esse eveniet hic in ipsam libero maxime molestiae nostrum provident
      quam, quas quos rerum totam velit? Ad aliquam esse et fugiat harum
      mollitia reiciendis temporibus? Aliquam architecto cumque, cupiditate
      delectus dolores impedit magni odit, omnis optio placeat, provident
      quisquam sed. Blanditiis distinctio eius harum id, illo inventore minus
      repellendus voluptas? Ad amet architecto at aut commodi consequatur
      consequuntur dicta enim esse fugiat ipsa iste itaque maiores, molestiae
      molestias nemo nihil nulla odio odit possimus praesentium quae quasi
      quisquam ratione sequi sunt voluptatum. Adipisci architecto consectetur
      consequatur cum cupiditate, dolor ducimus fugit ipsa ipsum labore magnam
      molestias nemo nesciunt possimus provident recusandae similique sint
      soluta sunt temporibus voluptatem voluptates voluptatibus. Animi
      aspernatur assumenda cupiditate debitis dolor, dolores doloribus dolorum
      hic impedit ipsa modi natus quae quaerat quam quas qui quibusdam quod sed
      soluta tenetur totam vitae voluptate. Accusamus asperiores quis vel? Aut
      delectus dicta natus nisi quasi ullam voluptatibus! Dignissimos doloremque
      ipsa obcaecati omnis quis voluptatem? Adipisci aut beatae cupiditate
      doloremque dolorum, expedita harum id, impedit maxime minima nulla optio
      reprehenderit voluptatibus? Architecto, atque blanditiis culpa dicta
      eligendi exercitationem hic id laborum laudantium perspiciatis quas
      quibusdam quo repellendus sunt, vel veniam veritatis? Accusantium ad dolor
      doloremque et laborum laudantium, magnam nemo nesciunt obcaecati provident
      qui repellendus voluptatibus. Amet atque deleniti dolorem doloremque
      ducimus ea earum error eveniet hic, id impedit in inventore ipsam itaque
      iure laboriosam laborum libero magnam modi molestiae nisi optio pariatur
      placeat provident quas quia quis quisquam quo repellendus sapiente sint
      tempora tenetur totam ullam voluptatem voluptates voluptatibus. Aperiam
      consectetur cupiditate, et magni molestias praesentium quibusdam quis
      sunt? Ad alias aperiam atque blanditiis eius iusto laborum magnam modi
      nihil placeat, provident vitae. Atque consequatur distinctio et excepturi
      fugit molestiae nam. Aliquam autem deleniti doloribus earum excepturi
      fugiat iure labore maxime nam nostrum officia optio pariatur possimus
      quibusdam, ratione reiciendis rem sed, sunt? Dolores id illo ipsa magni
      nam quae qui quisquam. Amet aut commodi deleniti, dolore dolores dolorum
      ducimus eligendi enim, et exercitationem facere iure laborum libero
      perspiciatis possimus quas reiciendis rerum! Accusamus accusantium alias
      amet commodi cupiditate debitis dignissimos fuga in inventore ipsa ipsam
      modi nam nisi nostrum, optio porro possimus, quaerat quasi quibusdam quod,
      tempora tempore ut?
    </section>
  )
}
