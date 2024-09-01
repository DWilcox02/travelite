import { Heading2 } from "../common_components/headings"

function PetSittingServices() {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="rounded-md bg-white bg-opacity-30">
        <Heading2 text="Pet Sitting" colour="black"></Heading2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 m-4">
          {/* <ServiceCard ></ServiceCard>
                    <ServiceCard service={MOCK_SERVICES[1]}></ServiceCard>
                    <ServiceCard service={MOCK_SERVICES[2]}></ServiceCard> */}
        </div>
      </div>
    </div>
  )
}

export default PetSittingServices