import React from 'react';
import { LuLeaf ,LuRecycle, LuAward} from "react-icons/lu";


const SustainabilitySection = () => {
  return (
    <div className="py-20 bg-gray-50 lg:mx-16">
      <div className="container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-medium mb-4">Our Commitment to Sustainability</h2>
          <p className="text-gray-600">
            We believe in creating fashion that respects both people and planet. Our pieces are crafted with sustainability at their core.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <LuLeaf className="text-gray-900" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-3">Sustainable Materials</h3>
            <p className="text-gray-600">
              We source eco-friendly fabrics including organic cotton, recycled polyester, and TENCEL™ to minimize our environmental impact.
            </p>
          </div>
          
          <div className="bg-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <LuRecycle className="text-gray-900" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-3">Ethical Production</h3>
            <p className="text-gray-600">
              All our garments are made in factories that ensure fair wages, safe working conditions, and respect for workers' rights.
            </p>
          </div>
          
          <div className="bg-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <LuAward className="text-gray-900" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-3">Quality & Longevity</h3>
            <p className="text-gray-600">
              We design timeless pieces that transcend seasonal trends, focusing on quality and durability to extend the lifecycle of our clothing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilitySection;