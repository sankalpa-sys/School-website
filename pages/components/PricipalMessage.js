import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

function PricipalMessage() {
  return (
    <Fade  bottom>
           <main className=" md:w-[85%] px-3 ml-auto h-auto  my-24 flex md:flex-row flex-col md:space-x-3 space-y-6">
      <section className="md:w-[40%] w-full h-full flex flex-col space-y-3 md:px-4 px-2 ">
        <div className="w-full relative h-96">
             <Image priority src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  className="w-full" layout="fill" alt="" />
        </div>
        <p className=" font-Roboto mt-4 first-letter:text-yellow-600 first-letter:font-bold first-letter:text-2xl">
          If there is no struggle, there is no progress. The true spirit of the
          saying by Frederick Douglass is relevant in timeless context. Every
          struggle in our life has shaped us into the person we are today. So,
          we state, be thankful for the hard times, they can only make us
          stronger. As the world is experiencing the trials at the present
          justifying the change as the only thing that is constant in this
          world, all sectors are bound to seek the variations. Undoubtedly, the
          field of education can be no exception to this.
        </p>
      </section>

      <section className="md:w-[60%] w-full font-serif flex flex-col  space-y-4 px-2 ">
        <h1 className="text-2xl text-indigo-600 font-bold font-Lora">Message from the Principal</h1>
        <p className="first-letter:text-yellow-600  first-letter:font-bold first-letter:text-2xl font-Roboto">
          Embracing the advent of opportunities within the pandemic, we are
          striving to institutionalize innovative concepts such as flipped
          classrooms, rubric-based evaluation, and speaker’s club activities
          into the core pedagogical practices. In fact, the institution has
          already set up ICT friendly classrooms to tap into the resources and
          capabilities to ensure our students objectively benefitted from
          variegated learning experiences in both online and physical mode. Amid
          adversities, I assure to disseminate quality education to our loving
          children.
        </p>
        
        <p className="font-Roboto">
          Standing at this critical and complex moment, I would extend my
          sincere thanks to valued parents for their support, cooperation, and
          patience, diligent students for instilling instructions to make their
          formative years of life more prolific, faculties for their untiring
          efforts to make classroom productive and innovative and well-wishers
          for their constructive feedback.
        </p>
        
       <p className="font-Cursive">The Undertaker</p>
       <p>Principal</p>
      </section>
    </main>
        </Fade>
   
  );
}

export default PricipalMessage;
