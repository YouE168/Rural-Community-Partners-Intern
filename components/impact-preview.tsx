import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const impacts = [
  {
    number: "150+",
    label: "Entrepreneurs Supported",
  },
  {
    number: "25+",
    label: "Communities Served",
  },
  {
    number: "$2.3M",
    label: "Economic Impact Generated",
  },
  {
    number: "50+",
    label: "Active Mentors",
  },
];

export default function ImpactPreview() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating measurable change in rural Southeast Kansas
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {impacts.map((impact, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-primary">
                  {impact.number}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
                  {impact.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
