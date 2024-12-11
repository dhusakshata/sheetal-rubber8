import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

import Silicon from "../../Images/Silicon.png"
import Turbocharger from "../../Images/Turbo-charger.png";
import Marine from "../../Images/Marine-wet.png";
import EPDM from "../../Images/EPDM-rubber.png";
import Organic from "../../Images/organic-rubber.png";
import Assembly from "../../Images/Assembly-rubber.png";
import Wired from "../../Images/wired-reinforced.png";
import FuelTube from "../../Images/Fuel-Tubes.png";
import Moulded from "../../Images/Moulded.png";


function product() {

  
  return (
    <div className="product-section">
      
      <div className="our-product">
       <h1> OUR PRODUCTS</h1>
            </div>

             {/* Image Gallery */}
             
             <div className="image-gallery">
          <div className="image-container">
            
            <img src={Silicon} alt="Rubber Product 1" />

            <div className="image-info">

            
            <h3>Silicon-Polyester Hoses</h3>
          
              <p>
              Silicone-Polyester hoses are designed specifically for use in demanding radiator, heater,and coolant transfer applications. Constructed from high-quality silicone reinforced with
              durable polyester fabric, these hoses offer excellent resilience and a reliable performance
              in harsh conditions.

              <button className="read-more"  >
              <Link to="/siliconpolyester">Read More</Link>
            </button>
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={Turbocharger} alt="Rubber Product 2" />
            <div className="image-info">
            <h3>Turbocharger & CAC Hoses</h3>
              <p>
              Engineered for high-performance connections in turbocharger and charge air cooler systems,ensuring durability in demanding automotive and industrial applications.
              Wide Temperature Range: Operates from-50°C to +230°C.Meets SAE J20 Class A standards.Reinforced Options:Polyester: Standard flexibility and durability.
              

              <button className="read-more"  >
              <Link to="/turbochargerhose">Read More</Link>
            </button>
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={Marine} alt="Rubber Product 3" />
            <div className="image-info">
            <h3>Marine Wet Exhaust Hoses</h3>
              <p>
              Sheetal Rubber provides high-quality Marine Wet
             Exhaust Hoses for engine and generator systems
              in in-board pleasure boats, ensuring durability and
              top performance in marine environments.
              Standard Hoses: Operate up to +180°C.
               HT Hoses: Withstand up to +230°C for turbocharged applications.
               <button className="read-more"  >
              <Link to="/marinewethose">Read More</Link>
            </button>
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={EPDM} alt="Rubber Product 4" />
            <div className="image-info">
            <h3>EPDM Rubber Hoses</h3>
              <p>High-performance hoses for radiator and cooling
systems, built to DIN73411 & SAEJ20 Class D
standards for durability, flexibility, and heat
resistance.
Key Features:
Nylon/Polyester: Flexible.
Aramid/Kevlar: High-strength, heatresistant.
Peroxide-Cured: Heat, ozone, and aging
resistant.
Reinforced/Non-Reinforced:High or low pressure use.
<button className="read-more"  >
              <Link to="/epdm">Read More</Link>
            </button>
</p>
            </div>
          </div>
          <div className="image-container">
            <img src={Organic} alt="Rubber Product 5" />
            <div className="image-info">
            <h3>Organic Rubber Hoses</h3>
              <p>
              Designed for low-temperature air, water, and fuel
transfer, with material options like SBR,
PVC/NBR, Neoprene, Vamac, and NBR for
specific needs.
Reinforcement: Polyester/Nylon (standard),
Kevlar/Aramid (high-strength).
Customization:
Inner: Nitrile (oil/fuel resistant).
Outer: Neoprene (weather/abrasion
resistant).
<button className="read-more"  >
              <Link to="/organic">Read More</Link>
            </button>
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={Assembly} alt="Rubber Product 6" />
            <div className="image-info">
            <h3>Assembly Hoses</h3>
              <p>Sheetal Rubber provides flexible hoses with
custom couplings for efficient media
transfer, operating from -40°C to +140°C in
sizes 6–75 mm.
Assembly Options:
Crimping: High-pressure durability.
CPC Clamps: Leak-free in highvibration setups.
Applications:
Oil Resistant: For engines, fuel, and
oil.
<button className="read-more"  >
              <Link to="/Assembly">Read More</Link>
            </button>
</p>
            </div>
          </div>

          <div className="image-container">
            <img src={Wired} alt="Rubber Product 6" />
            <div className="image-info">
            <h3>Wired Reinforced Hoses</h3>
              <p>Engineered for reliability in demanding
environments, with a temperature range of
-40°C to +140°C and sizes from 20 mm to
200 mm.
Applications:
Suction Hose: Vacuum integrity
for fluid/air transfer.
Air Filter Hose: Durable for clean
engine air intake.
Flexible Hose: Versatile for fluids
and gases.
<button className="read-more"  >
              <Link to="/wired">Read More</Link>
            </button>
</p>
            </div>
          </div>

          <div className="image-container">
            <img src={FuelTube} alt="Rubber Product 6" />
            <div className="image-info">
            <h3>Fuel Tubes Hoses</h3>
              <p>
              Engineered for safe and efficient fluid
              transfer in automotive and industrial
         systems, with inner diameters ranging from
        2mm to 45 mm.
       Applications:
        Multilayer Fuel Tubes: Fuelresistant for automotive systems.
        Fuel Tubes with Sleeves: Heat and abrasion-resistant.
        Fuel Flow Tubes: Minimize pressure
        drop.
        <button className="read-more"  >
              <Link to="/fueltube">Read More</Link>
            </button>
        </p>

            </div>
          </div>
            <div className="image-container">
            <img src={Moulded} alt="Rubber Product 6" />
            <div className="image-info">
            <h3>Moulded Hoses</h3>
              <p>We specialize in high-performance,
custom-moulded parts for various
industries, using materials like SBR,
EPDM, PVC/NBR, Silicone, Neoprene,
and more.
Applications:
Grommets: Wire and cable
protection.
Gaskets & Seals: Reliable sealing
under pressure.

<button className="read-more"  >
              <Link to="/moulded">Read More</Link>
            </button>

</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default product;