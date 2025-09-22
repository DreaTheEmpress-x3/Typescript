import { tsParticles } from "@tsparticles/engine";
//import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";

class Particles {
    constructor() {
        const mParticles = async (options: any) => {
            await loadSlim(tsParticles);
            await tsParticles.load({ id: "tsparticles", options });
        }
        const configs = {
            particles: {
                number: {
                    value: 120
                },
                color: {
                    value: "#ff9615ff"
                },
                links: {
                    enable: false,
                    distance: 200
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: .3
                },
                size: {
                    value: {
                        min: 3,
                        max: 5
                    }
                },
                move: {
                    enable: true,
                    speed: 12
                },
                collisions: {
                    enable: false
                },
            },
            poisson: {
                enable: true
            }
        };
        mParticles(configs);
    }
}
export default Particles;