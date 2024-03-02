import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
        return {
      "data": [
        {
          "stateNameAndBildung": "Baden-Württemberg (»Bildungszeit«)",
          "stateName": "Baden-Württemberg",
          "id": 1,
          "hasBildungsUrlaubLaws" : true,
          "entitlementOfTwoYears": "N/A",
          "entitlementPerYear": "5 days",
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
          ],
          "legalDocument": "https://www.landesrecht-bw.de/bsbw/document/jlr-BiZGBWrahmen/part/X",
        },
        {
          "stateNameAndBildung": "Berlin (»Bildungzeit«)",
          "stateName": "Berlin",
          "id": 2,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "hasBildungsUrlaubLaws" : true,
          "entitlementPerYear": "5 days",
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
          ],
          "legalDocument": "https://www.berlin.de/sen/arbeit/weiterbildung/bildungszeit/downloads/bildungszeitgesetz-berlin.pdf",
        },
        {
          "stateNameAndBildung": "Brandenburg (»Bildungsfreistellung«)",
          "stateName": "Brandenburg",
          "id": 3,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "hasBildungsUrlaubLaws" : true,
          "entitlementPerYear": "5 days",
          "principles": [
            "(1) Continuing education is an integrated and equal part of the education system. Continuing education within the meaning of this Act shall include all forms of continuation, resumption or supplementation of organized learning outside the educational programmes of general education schools and vocational schools. Insofar as extracurricular youth education is not regulated elsewhere, it shall be included in continuing education within the meaning of this Act. Higher education and vocational training are not covered by this Act.",
            "(2) The providers and institutions of continuing education shall have the right to design their own curricula.",
            "(3) The continuing education of individual occupational groups regulated by special laws and legal provisions shall remain unaffected by this Act, as shall continuing vocational education and training related to the labor market on the basis of laws, legal provisions and public funding programs.",
            "(4) The promotion of political education by the Landeszentrale für politische Bildung shall remain unaffected.",
          ],
          "eligibility": [
            "(1) In accordance with this Act, employees shall be entitled to time off work from their place of employment to participate in recognized further training events in accordance with Section 24 for the purpose of professional, cultural or political further training, with continued payment of remuneration.",
            "(2) Employees within the meaning of this Act shall be workers, salaried employees and trainees whose place of work is in the Land, as well as persons working from home and persons treated as such who are to be regarded as employees due to their economic independence."
          ],
          "legalDocument": "https://bravors.brandenburg.de/gesetze/bbgwbg",
        },
        {
          "stateNameAndBildung": "Bremen (»Bildungszeit«)",
          "stateName": "Bremen",
          "id": 4,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "hasBildungsUrlaubLaws" : true,
          "entitlementPerYear": "5 days",
          "principles": [
            "(1) Educational leave serves the purpose of political, vocational and general further education within the meaning of Section 1 (1) and Section 2 of the Act on Further Education in the State of Bremen and Section 13 (2) and (3) of the Bremen Children, Youth and Family Support Act.",
            "(2) The granting of educational leave in accordance with this Act is intended to enable employees to participate in recognized educational events while continuing to receive their pay."
          ],
          "eligibility": [
            "(1) to all employees whose employment relationships have their main focus in the Free Hanseatic City of Bremen",
            "(2) to persons who are not employees at the beginning of their participation in educational events under this Act and who have been resident in the Free Hanseatic City of Bremen for at least six months, in accordance with § 12.",
            "(2) Employees within the meaning of this Act are also: Those employed for their vocational training,p ersons working from home and persons treated as such as well as other persons who are to be regarded as employee-like persons due to their economic independence, people who work in recognized workshops for people with disabilities or for these facilities in home-based work."
          ],
          "legalDocument": "https://www.transparenz.bremen.de/metainformationen/bremisches-bildungszeitgesetz-brembzg-vom-18-dezember-1974-105314?asl=bremen02.c.732.de&template=20_gp_ifg_meta_detail_d",
        },
        {
          "stateNameAndBildung": "Hamburg (»Bildungsurlaub«)",
          "stateName": "Hamburg",
          "id": 5,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) By being released from work in accordance with this Act, employees shall be enabled to participate in recognized events for both political education and further vocational training and to qualify for voluntary work.",
            "(2) Political education shall require employees to be able to assess political contexts and perform political and social tasks.",
            "(3) Continuing vocational training shall help employees to maintain, improve or extend their professional qualifications and mobility.",
            "(4) The Senate shall be authorized to determine by statutory order the areas of voluntary work for the preparation of which leave of absence is to be granted."
          ],
          "eligibility": [
            "This Act applies to all workers and employees as well as those employed for their vocational training (employees) whose employment relationships are centered in Hamburg. Employees working in workshops for the disabled are treated in the same way as employees."
          ],
          "legalDocument": "https://www.landesrecht-hamburg.de/bsha/?query=DOKNR%3Ajlr-BiUrlGHArahmen",
        },
        {
          "stateNameAndBildung": "Hessen (»Bildungsurlaub«)",
          "stateName": "Hessen",
          "id": 6,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "Educational leave serves to political education,training (qualification and further training) for the performance of an honorary office or further vocational training for employees not involved in vocational training.",
          "Political education should enable employees to recognize their position in the company or society as well as social contexts. The aim of educational leave for civic education is to improve employees' understanding of societal, social or political contexts in order to promote the participation in the state, society or company that is desirable in a democratic community.",
          "Continuing vocational training should enable employees to maintain, improve or expand their professional qualifications and at the same time provide them with a not inconsiderable amount of knowledge of social contexts so that they can recognize their position in the company or society.",
          "Educational leave for training in the performance of an honorary office is intended to enable employees to carry out an honorary office they have taken on. In addition to imparting the knowledge required to perform the honorary office, employees must also be given a not insignificant amount of knowledge of socio-political contexts so that they can recognize their position in the company or society. For the purposes of this Act, honorary positions are only those that are exercised in fulfillment of civic duties to strengthen the democratic community or in other special public interest. The provisions of this Act shall not apply to honorary offices for which remuneration, compensation for loss of earnings or compensation for the time spent attending a training event is granted under other regulations. The areas of voluntary work for which training entitlement to educational leave exists shall be determined by statutory order."
          ],
          "eligibility": [
            "(1) All employees whose main activity is in Hesse shall be entitled to paid educational leave from their place of employment. Employees within the meaning of this Act are workers, salaried employees, persons employed for their vocational training, persons working from home and persons treated as such, other persons who are to be regarded as employee-like persons due to their economic independence, as well as employees in workshops for the disabled. Employment agencies within the meaning of this Act are employers, training centers and workshops for the disabled."
          ],
          "legalDocument": "https://www.rv.hessenrecht.hessen.de/bshe/document/jlr-BiUrlGHE1998V6P1",
        },
        {
          "stateNameAndBildung": "Mecklenburg-Vorpommern (»Bildungsfreistellung«)",
          "stateName": "Mecklenburg-Vorpommern",
          "id": 7,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) This Act regulates the release of employees in Mecklenburg-Vorpommern for the purpose of further training through participation in recognized events in accordance with § 9.",
            "(2) This Act shall not apply to the legal relationships of persons in the service of the federal government and federally funded public corporations.",
            "(3) Other legal or administrative provisions, collective bargaining agreements, company agreements and other contractual agreements on time off for the purpose of further training shall remain unaffected."
          ],
          "eligibility": [
            "(1) Employees whose employment or service relationships have their main focus in Mecklenburg-Vorpommern are entitled to time off to participate in recognized events with continued payment of their salary or remuneration in accordance with § 7. Employees are free to choose a recognized event. The costs of further training and, where applicable, accommodation, travel costs and meals shall be borne by the participants themselves.",
            "(2) For employees who are undergoing vocational training, the entitlement to time off only applies to participation in political training events and training that is necessary for the performance of an honorary office.",
            "(3) The entitlement shall continue to apply to days of incapacity for work during the educational leave of absence as evidenced by a medical certificate."
          ],
          "legalDocument": "https://www.landesrecht-mv.de/bsmv/document/jlr-BiFreistGMV2013rahmen/part/R",
        },
        {
          "stateNameAndBildung": "Niedersachsen (»Bildungsurlaub«)",
          "stateName": "Niedersachsen",
          "id": 8,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "Employees shall be entitled to educational leave to participate in educational events recognized under Section 10 of this Act. There shall be no entitlement to educational leave under this Act if the employee is entitled to time off from work for the educational event under other laws, collective agreements or company agreements for at least the period specified in subsection (4) and with continued payment of wages at least in the amount of the remuneration payable under section 5. The same applies if the employee is not entitled to time off from work under the other regulations only because this has already been taken for other educational events."
          ],
          "eligibility": [
            "Workers are blue-collar and white-collar workers as well as those employed for their vocational training. The following shall also be considered employees:  persons working from home and persons treated as such, other persons who are to be regarded as employee-like persons due to their economic independence, and employees within the meaning of Section 40 (2) of the Federal Social Assistance Act who work in workshops for the disabled.",
            "The entitlement to educational leave can be claimed for the first time after six months of employment."
          ],
          "legalDocument": "https://www.aewb-nds.de/fileadmin/content/%C3%9Cbertrag/Bildungs_und_Sonderurlaub/NBildUG.PDF",
        },
        {
          "stateNameAndBildung": "Nordrhein-Westfalen (»Bildungsurlaub«)",
          "stateName": "Nordrhein-Westfalen",
          "id": 9,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) Employee training shall take the form of release from work for the purpose of further vocational and political training at recognized training events with continued payment of wages.",
            "(2) Continuing vocational training for employees serves the purpose of continuing vocational and political training and their combination.",
            "(3) Continuing vocational training for employees promotes employees' job-related skills and improves their professional mobility. It is not limited to the activity previously performed. Training content that is not directly related to a professional activity is included if it can be used in the professional activity at least to the indirect benefit of the employer.",
            "(4) Political employee training improves employees' understanding of societal, social and political contexts and thus promotes the participation and co-responsibility in the state, society and profession that is desirable in a democratic community."
          ],
          "eligibility": [
            "(1) Employees shall be entitled to five working days of further training per calendar year. The entitlement for two calendar years may be combined.",
            "(2) If an employee regularly works more or less than five days a week, the entitlement shall be increased or reduced accordingly.",
            "(3) An employee acquires the entitlement after six months of employment.",
            "(4) If the employee has been refused the further training to which he/she is entitled within a calendar year on the basis of § 5 para. 2, the entitlement shall be carried over once to the following calendar year if the employment relationship continues.",
            "(5) If an employee falls ill during the employee training, the days of incapacity for work evidenced by a medical certificate shall not count towards the employee training.",
            "(6) The entitlement shall not apply if the employee has attended further training for the current calendar year in a previous employment relationship.",
            "(7) Employees in a company or office with up to 50 employees shall not be entitled to time off for the current calendar year if ten percent of the employees have already been granted time off in the current calendar year. Employees in a company or office with fewer than ten employees are not entitled to time off."
          ],
          "legalDocument": "https://recht.nrw.de/lmi/owa/br_text_anzeigen?v_id=3920090507103037839",
        },
        {
          "stateNameAndBildung": "Rheinland-Pfalz (»Bildungsfreistellung«)",
          "stateName": "Rheinland-Pfalz",
          "id": 10,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) Employees in the state of Rhineland-Palatinate are entitled to time off from work with continued payment of their wages (training leave) from their employer for the purposes of further training in accordance with the following provisions.",
            "(2) Employees within the meaning of this Act are employees, persons working from home and persons treated as such, as well as other persons who are to be regarded as employee-like persons due to their economic independence.",
            "(3) This Act shall apply to civil servants within the meaning of Section 1 (1) of the State Civil Servants Act and to judges within the meaning of Section 1 (1) sentence 1 of the State Judges Act."
          ],
          "eligibility": [
            "(1) The entitlement to training leave shall amount to ten working days for each period of two consecutive calendar years. This period begins on January 1 of each odd-numbered calendar year. If the employment relationship is established in an even calendar year, the entitlement to training leave in this calendar year amounts to five working days. If the employee regularly works more or less than five days a week, the entitlement increases or decreases accordingly. The entitlement shall remain in force for proven days of incapacity to work during the training leave.",
            "(2) The entitlement to training leave shall not be affected by a change of employment. In the event of a change of employment within the two-year period, any training leave already taken shall be offset against the entitlement vis-à-vis the new employer.",
            "(3) For those employed in Rhineland-Palatinate for their vocational training, this Act shall apply with the proviso that the entitlement to educational leave shall amount to five working days in the training year for participation in events of socio-political further training if this does not jeopardize the training objective."
          ],
          "legalDocument": "https://landesrecht.rlp.de/bsrp/document/jlr-BiFreistGRPV4P1",
        },
        {
          "stateNameAndBildung": "Saarland (»Bildungsfreistellung«)",
          "stateName": "Saarland",
          "id": 11,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) Time off from work shall be granted for further vocational or political training measures and further training for voluntary work or voluntary and unpaid work in the public interest.",
            "(2) Continuing vocational training promotes professional and social skills. It serves to maintain, expand and adapt professional knowledge and skills, to reintegrate job seekers into working life, to transition to another professional activity and to secure existing employment. Scientific continuing education is part of continuing vocational training.",
            "(3) Continuing political education is intended to promote the ability and motivation to assess political, cultural and social contexts and to perform political and social tasks.",
            "(4) Continuing education for the exercise of honorary and public welfare-oriented, voluntary and unpaid activities should provide special qualifications for these activities."
          ],
          "eligibility": [
            "(1) Employees shall be entitled to time off work from their employer or their employer for the period of further training in accordance with this Act, with continued payment of their remuneration or salary. In the case of shift work, this entitlement shall also exist if participation in the further training event would be possible before or after a shift to be worked on that day.",
            "(2) Employees within the meaning of this Act are employees, civil servants, judges and trainees whose place of work (company, office) is in Saarland. In particular, all pupils who are not being trained in accordance with the Vocational Training Act but who are in state-recognized, comparable full-time training courses lasting at least two years are also considered trainees. Employees also include those working from home as well as their equals and other persons who are to be regarded as employee-like persons due to their economic independence."
          ],
          "legalDocument": "https://recht.saarland.de/bssl/document/jlr-BiFreistGSL2010rahmen",
        },
        {
          "stateNameAndBildung": "Sachsen-Anhalt (»Bildungsfreistellung«)",
          "stateName": "Sachsen-Anhalt",
          "id": 12,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "(1) Employees are entitled to time off from work for the purpose of further training in educational events recognized in accordance with § 8.",
            "(2) Workers, employees and trainees whose place of work is in the State of Saxony-Anhalt or whose employer has its place of business in the State of Saxony-Anhalt, as well as persons working from home and persons treated as such who are to be regarded as employed persons due to their economic independence, shall be deemed to be employees. The provisions of this Act shall apply accordingly to unemployed persons."
          ],
          "eligibility": [
            "(1) Employees shall be entitled to time off from work for the purpose of further training for five working days per calendar year. The entitlement for two calendar years may be combined.",
            "(2) Time off shall only be granted for recognized educational events which generally take place over several days or as one-day events as part of a series of events.",
            "(3) If the employee regularly works more or less than five days a week, the entitlement shall be increased or reduced accordingly.",
            "(4) An employee acquires the entitlement after six months of employment with effect from the beginning of the employment relationship.",
            "(5) The entitlement to time off work for the purpose of further training shall not be affected by a change of employment. In the event of a change of employment within the two-year period, any leave of absence already taken shall be offset against the entitlement vis-à-vis the new employer.",
            "(6) Any unused entitlement to time off from work for the purpose of further training in the previous calendar year may still be claimed in the current calendar year.",
            "(7) Upon termination of the employment relationship, the employer shall be obliged to issue a certificate upon request stating whether and to what extent the employee has been granted time off from work for the purpose of further training in the current calendar year in accordance with this Act.",
            "(8) If an employee falls ill during the leave of absence from work for the purpose of further training, the days of incapacity for work evidenced by a medical certificate shall not be counted towards the training leave under this Act."
          ],
          "legalDocument": "https://www.landesrecht.sachsen-anhalt.de/bsst/document/jlr-BiFreistGSTV4P9",
        },
        {
          "stateNameAndBildung": "Schleswig-Holstein (»Bildungsfreistellung-Bildungsurlaub«)",
          "stateName": "Schleswig-Holstein",
          "id": 13,
          "entitlementOfTwoYears": "Yes - 10 days every 2 years",
          "entitlementPerYear": "5 days",
          "hasBildungsUrlaubLaws" : true,
          "principles": [
            "The law applies to continuing education in Schleswig-Holstein. Continuing education regulated by special legislation remains unaffected by this. The right of the providers and institutions of continuing education to independently design curricula and programs as well as their right to freely choose their directors and employees is guaranteed."
          ],
          "eligibility": [
            "(1) All employees, including those in vocational training, are entitled to time off from work to participate in recognized general, political, cultural and vocational training events (educational leave) as well as to qualify for voluntary and civic engagement. This only applies insofar as the employment relationships have their main focus in Schleswig-Holstein.",
            "(2) Employees within the meaning of this Act are: Male and female employees, Civil servants pursuant to Section 1 (1) of the State Civil Servants Act, Judges within the meaning of the State Judges Act, Employees working from home and persons treated as such, and other persons who are to be regarded as employee-like persons due to their economic independence. Persons similar to employees in this sense also include people with disabilities in the work area of a recognized workshop for people with disabilities."
          ],
          "legalDocument": "https://www.gesetze-rechtsprechung.sh.juris.de/bssh/document/jlr-WeitBiGSHrahmen/part/X",
        },
        {
          "stateNameAndBildung": "Thüringen (»Bildungsfreistellung«)",
          "stateName": "Thüringen",
          "entitlementOfTwoYears": "N/A",
          "entitlementPerYear": "5 days",
          "id": 14,
          "principles": [
            "(1) Employees are entitled to paid educational leave from their employer.",
            "(2) The leave is granted for participation in recognized educational events in the areas of socio-political, work-related or volunteer-related education.",
            "(3) Socio-political education serves to provide information about societal, social and political contexts as well as the ability to assess, participate and contribute to societal, social and political life.",
            "(4) Work-related education serves to maintain, renew, expand and improve work-related knowledge, skills and abilities. It includes in particular the teaching of key qualifications as well as knowledge of social and political contexts in the world of work.",
            "(5) Volunteering-related training serves to qualify employees to carry out voluntary work. In addition to imparting the knowledge required to carry out voluntary work, it should also provide employees with a not inconsiderable amount of knowledge of socio-political contexts so that they can recognize their place in the company or society. The areas of voluntary work for which employees are entitled to time off for training through volunteer-related training are defined by statutory order in accordance with § 13."
          ],
          "eligibility": [
            "(1) The entitlement to training leave shall generally amount to five working days within a calendar year. If the employee regularly works more or less than five days a week, the average number of weekly working days in the calendar year shall be decisive for the pro rata calculation of the entitlement. A subsequent reversal of days of training leave already taken is excluded. The entitlement shall remain in force for proven days of incapacity to work during the training leave.",
            "(2) The entitlement to training leave shall not be affected by a change of employment. Any training leave already taken shall be offset against the entitlement vis-à-vis the new employer.",
            "(3) The entitlement to time off can be carried over once from the year in which it arises to the following year. The transfer shall only take place at the employee's request to the extent that the employer has rejected an application for educational leave in the current calendar year pursuant to Section 6 (2) sentence 1 nos. 2 to 5 or has withdrawn its consent pursuant to Section 6 (7) sentence 1.",
            "(4) In deviation from paragraph 1, the entitlement to educational leave for employees for their vocational training shall be three working days within a calendar year. In deviation from paragraph 3, sentence 2, this entitlement may only be carried over once into the following calendar year upon application to the extent that the entitlement has not been exhausted in the current calendar year. The leave of absence shall not be taken during school education.",
            "(5) Educational leave for employees with teaching duties at universities and employees at schools who are entrusted with the teaching or supervision of pupils should generally be taken during the lecture-free or lesson-free period.",
            "(6) Employees in a company that has fewer than five employees are not entitled to training leave. When determining the number of employees pursuant to sentence 1, the employees of affiliated companies within the meaning of Section 15 of the German Stock Corporation Act of September 6, 1965 (BGBl. I p. 1089), as amended, shall be included. Part-time employees with a regular weekly working time of no more than 20 hours are counted with a factor of 0.5 and part-time employees with a regular weekly working time of more than 20 but less than 30 hours are counted with a factor of 0.75 towards the number of employees. Employees undergoing vocational training are not taken into account when determining the number of employees."
          ],
          "legalDocument": "https://landesrecht.thueringen.de/bsth/document/jlr-BiFreistGTHpP13",
        },
                {
          "stateNameAndBildung": "Sachsen",
          "stateName": "Sachsen",
          "entitlementOfTwoYears": "No",
          "entitlementPerYear": "No regulation in place",
          "id": 15,
          // "hasBildungsUrlaubLaws" : false,
          "principles": [
            "Saxony and Bavaria are the only federal states without a statutory right to educational leave. There is currently no legal basis (as of October 2023)."
          ],
          "eligibility": [
            "Nevertheless, employees in Saxony can attend further vocational training with continued pay if their employer supports the project. The leave of absence is at the discretion of the employer. The Saxon Federation of Trade Unions is working together with its major member unions to push through a legal regulation for Saxony - but so far without success. See external link below for the Bildungsurlaub initiative (German website)."
          ],
          "legalDocument": "https://www.zeit-fuer-sachsen.de/",
        },
                {
          "stateNameAndBildung": "Bayern",
          "stateName": "Bayern",
          "id": 16,
          "entitlementPerYear": "No regulation in place",
          "entitlementOfTwoYears": "No",
          // "hasBildungsUrlaubLaws" : false,
          "principles": [
            "Saxony and Bavaria are the only federal states without a statutory right to educational leave. There is currently no legal basis (as of October 2023)."
          ],
          "eligibility": [
            "Unfortunately, there is no legal entitlement to educational leave in Bavaria, as Bavaria has never enacted an educational leave law. Therefore, if you work in Bavaria, you can only take further training during your recreational leave. More information in the below link (German website)."
          ],
          "legalDocument": "https://www.bildungsurlaub.de/infos/bundeslaender/bildungsurlaub-in-bayern-leider-nein",
        },
      ]
    };
  }
}
