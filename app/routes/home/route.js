import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
        return {
      "data": [
        {
          "stateName": "Baden-Württemberg (»Bildungszeit«)",
          "id": 1,
          "principles": [
            " (1) Employees in Baden-Württemberg are entitled to educational leave from their employer. During training leave,they shall be released from work by their employer with continued payment of remuneration.",
            "(2) Educational leave may be claimed for vocational or political further training measures and for training for voluntary work.",
            "(3) Continuing vocational training serves to maintain, renew, improve or expand job-related knowledge, skills, development opportunities or abilities.",
            "(4) Continuing political education serves to provide information about political contexts and the opportunity to participate in political life.",
            "(5) The qualification to carry out voluntary activities serves to strengthen voluntary commitment. The areas of voluntary activities for which qualification entitlement to training time exists shall be determined by statutory order. The state government shall be authorized to regulate the areas of voluntary activities for which qualification entitlement to training time exists by statutory order."
          ],
          "eligibility": [
            "(1) Employees",
            "(2) Persons working from home and persons treated as such, as well as other persons who are to be regarded as employee-like persons due to their lack of independence. Persons similar to employees in this sense are also persons with disabilities in the work area of a recognized workshop for disabled persons",
            "(3) Those employed for their training and students at the Baden-Württemberg Cooperative State University, insofar as the focus of their activities is in the state of Baden-Württemberg.",
          ]
        },
        {
          "stateName": "Berlin (»Bildungzeit«)",
          "id": 2,
          "principles": [
            "(1) Employees in the federal state of Berlin shall, while continuing to receive their employer with continued payment of their salary entitled to leave of absence from work for participation in recognized educational educational events (educational leave).",
            "(2) Employees within the meaning of this Act are also: persons employed for their vocational training, persons working from home and persons treated as such, other persons who, due to their economic independence, are to be regarded as are to be regarded as employee-like persons, and participants in measures in institutions for the integration of people with disabilities into working and professional life.",
            "(3) Educational leave serves the purposes of political education, further vocational training and qualification for the performance of voluntary activities.",
            "(4) Political education is intended to promote the ability and motivation to assess political and social social contexts and to perform political and social tasks.",
            "(5) Continuing vocational training is intended to maintain, renew and develop professional knowledge, skills, maintain, renew, improve and expand professional knowledge, skills, abilities and expand as well as impart knowledge of operational and social contexts. Educational content that is not directly related to the work performed are included if they have at least an indirect benefit to the employer in the professional activity.",
            "(6) Continuing vocational training within the meaning of this Act shall also be deemed to be an additional qualification accompanying vocational training for persons employed for the purpose of their vocational training.",
            "(7) The qualification to carry out voluntary activities is intended to promote the promote the strengthening of voluntary commitment.",
            "(8) Voluntary activities within the meaning of this Act are only those that are performed in fulfillment of civic duties to strengthen the democratic community or in other special public interest. The provisions of this Act shall not apply to honorary activities for which remuneration, compensation for loss of earnings or compensation for the time spent attending a training event is granted under other regulations. The areas of voluntary work for the qualification of which there is an entitlement to training time shall be determined by statutory order.",
            "(9) Civic education, continuing vocational training and training for volunteer work should also promote gender equality, equality between people with and without disabilities, participation and equal participation of people with disabilities. participation and equal participation of people with a migration migrant backgrounds and the culture of valuing diversity."
          ],
          "eligibility": [
            "(1) The entitlement to training leave shall amount to five working days within a calendar year, provided that the entitled person regularly works five days a week. In anticipation of the training time in the following calendar year, the entitlement may be combined to ten working days.",
            "(2) If the person regularly works more or less than five days a week, the entitlement shall be increased or reduced accordingly in accordance with paragraph 1. Fractions of a day shall be rounded up in favor of the entitled person. rounded up.",
            "(3) If the entitlement to training leave has not been exhausted within a calendar year, the remaining entitlement cannot be carried over to the following calendar year.",
            "(4) If an entitled person falls ill during the training period, the days of illness evidenced by a medical certificate shall not be counted towards the training period.",
            "(5) In the event of a change of employment, the training period granted by another employer in the same calendar year shall be taken into account. This shall also apply in the event of a change of employment with the same employer.",
            "(6) As a rule, leave of absence for those entitled to it at schools and universities shall be granted during periods when there are no lessons or lectures.",
            "(7) Persons similar to employees are also entitled to training time within the contractual period during periods without an obligation to perform. performance obligation.",
            "(8) In the case of shift work, the entitlement to time off also exists if participation in the recognized educational event would be possible before or after a shift to be worked on that day."
          ]
        },
        {
          "stateName": "Brandenburg (»Bildungsfreistellung«)",
          "id": 3,
          "principles": [
            "(1) Continuing education is an integrated and equal part of the education system. Continuing education within the meaning of this Act shall include all forms of continuation, resumption or supplementation of organized learning outside the educational programmes of general education schools and vocational schools. Insofar as extracurricular youth education is not regulated elsewhere, it shall be included in continuing education within the meaning of this Act. Higher education and vocational training are not covered by this Act.",
            "(2) The providers and institutions of continuing education shall have the right to design their own curricula.",
            "(3) The continuing education of individual occupational groups regulated by special laws and legal provisions shall remain unaffected by this Act, as shall continuing vocational education and training related to the labor market on the basis of laws, legal provisions and public funding programs.",
            "(4) The promotion of political education by the Landeszentrale für politische Bildung shall remain unaffected.",
          ],
          "eligibility": [
            "(1) In accordance with this Act, employees shall be entitled to time off work from their place of employment to participate in recognized further training events in accordance with Section 24 for the purpose of professional, cultural or political further training, with continued payment of remuneration.",
            "(2) Employees within the meaning of this Act shall be workers, salaried employees and trainees whose place of work is in the Land, as well as persons working from home and persons treated as such who are to be regarded as employees due to their economic independence."
          ]
        },
        // {
        //   "stateName": "smss.exe",
        //   "id": 4,
        //   "description": "Stark",
        // },
        // {
        //   "stateName": "smss.exe",
        //   "id": 5,
        //   "description": "Stark",
        // },
        // {
        //   "stateName": "smss.exe",
        //   "id": 6,
        //   "description": "Stark",
        // },
        // {
        //   "stateName": "smss.exe",
        //   "id": 7,
        //   "description": "Stark",
        // },
        // {
        //   "stateName": "smss.exe",
        //   "id": 8,
        //   "description": "Stark",
        // },
        // {
        //   "stateName": "smss.exe",
        //   "id": 9,
        //   "description": "Stark",
        // },
      ]
    };
  }
}
