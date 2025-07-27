import { Card } from "../components/ui/card";

const AboutSection = () => {
  const devMilestones = [
    {
      year: "2021",
      title: "First Line of Code",
      description: "Started with C, immediately fell in love with problem-solving",
      icon: "💻"
    },
    {
      year: "2022",
      title: "HTML/CSS/JAVASCRIPT Knockout",
      description: "Mastered vanilla JS, built first interactive web applications",
      icon: "⚡"
    },
    {
      year: "2023",
      title: "React Champion",
      description: "Became React specialist, started building complex SPAs",
      icon: "⚛️"
    },
    {
      year: "2024",
      title: "Full-Stack Fighter",
      description: "Added backend skills with Node.js and PHP/Laravel",
      icon: "🥊"
    },
    {
      year: "2025",
      title: "Professional Arena",
      description: "Started Building real life projects, delivered 20+ successful projects",
      icon: "🏆"
    },
   
  ];
  const boxingJourney = [
    {
      achievement: "Amateur Champion",
      description: "Won regional boxing championship in heavyweight division",
      year: "2021"
    },
    {
      achievement: "Training Discipline",
      description: "6 AM daily training routine for 4+ years straight",
      year: "Ongoing"
    },
    {
      achievement: "Mental Toughness",
      description: "Competed in 15+ matches, never backed down from a challenge",
      year: "2021-2024"
    },
    {
      achievement: "Pankration training",
      description: "Developed signature right hook, known for precision and power, also grappling tactics",
      year: "2025"
    },
  ];

  return (
    <section className="py-20 bg-gradient-hero relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-canvas/20 backdrop-blur-sm border border-ropes rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-fighter-red rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm font-mono">ROUND 3</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">The Fighter Behind </span>
            <span className="text-champion-gold">the Code</span>
          </h2>
          
          <blockquote className="text-xl text-spotlight italic max-w-3xl mx-auto leading-relaxed">
            "Boxing taught me that every problem has a solution - you just need the right combination of strategy, 
            persistence, and the courage to keep swinging until you break through."
          </blockquote>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Developer Journey */}
          <div>
            <h3 className="text-3xl font-bold text-spotlight mb-8 text-center lg:text-left">
              💻 Developer Evolution
            </h3>
            
            <div className="space-y-6">
              {devMilestones.map((milestone, index) => (
                <Card 
                  key={milestone.year}
                  className="bg-canvas/30 backdrop-blur-sm border-ropes hover:border-spotlight/50 transition-all duration-300 p-6 group hover:shadow-spotlight"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl group-hover:animate-float">{milestone.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-champion-gold font-bold text-lg">{milestone.year}</span>
                        <div className="h-px bg-ropes flex-1" />
                      </div>
                      <h4 className="text-foreground font-semibold text-lg mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Boxing Journey */}
          <div>
            <h3 className="text-3xl font-bold text-fighter-red mb-8 text-center lg:text-left">
              🥊 Ring Achievements
            </h3>
            
            <div className="space-y-6">
              {boxingJourney.map((achievement, index) => (
                <Card 
                  key={achievement.achievement}
                  className="bg-canvas/30 backdrop-blur-sm border-ropes hover:border-fighter-red/50 transition-all duration-300 p-6 group hover:shadow-knockout"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-fighter-red font-bold text-lg">{achievement.achievement}</h4>
                      <span className="text-champion-gold text-sm font-medium">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats Card */}
            <Card className="bg-fighter-red/10 border-fighter-red/30 p-6 mt-8">
              <h4 className="text-fighter-red font-bold text-xl mb-4 text-center">Ring Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground">Matches</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">4+</div>
                  <div className="text-sm text-muted-foreground">Years Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5:30 AM</div>
                  <div className="text-sm text-muted-foreground">Daily Start</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">1</div>
                  <div className="text-sm text-muted-foreground">Championship</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16">
          <Card className="bg-champion-gold/5 border-champion-gold/20 p-8 text-center">
            <h4 className="text-2xl font-bold text-champion-gold mb-4">The Winning Formula</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl">🎯</div>
                <h5 className="font-semibold text-foreground">Focus</h5>
                <p className="text-sm text-muted-foreground">
                  Both in the ring and in code, laser focus on the objective separates winners from the rest.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">💪</div>
                <h5 className="font-semibold text-foreground">Persistence</h5>
                <p className="text-sm text-muted-foreground">
                  Every bug is like a tough opponent - you keep fighting until you find the winning combination.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🧠</div>
                <h5 className="font-semibold text-foreground">Strategy</h5>
                <p className="text-sm text-muted-foreground">
                  Success comes from smart planning, whether designing an API or planning your next move in the ring.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;