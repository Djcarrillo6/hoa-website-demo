import React, { Component } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion';
import FAQFullNavbar2 from '../components/Layouts/FAQFullNavbar2';

const faqFull = () => {
	return (
		<>
			<FAQFullNavbar2 />
			<section id='faq' className='faq-area ptb-100'>
				<div className='container'>
					<div className='section-title'>
						<span>FAQ</span>
						<h2>
							Frequently Asked <b>Questions</b>
						</h2>
					</div>

					<div className='row'>
						<div className='col-lg'>
							<div className='faq'>
								<Accordion allowZeroExpanded preExpanded={['a']}>
									<AccordionItem uuid='a'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What is a homeowners association?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												An association is a nonprofit corporation or sometimes
												an unincorporated association created to manage a common
												interest development. The association provides the means
												for the ownership and use of recreational facilities and
												other commonly used amenities. The association achieves
												architectural control, rules enforcement and a base for
												homeowner social interaction.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='b'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What is the board of directors?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												Your association is a corporation by law and therefore
												must be managed by a governing board just like any other
												corporation. The Board of Directors is the body elected
												by the members of the association to run the business of
												the association. The Board establishes rules and
												regulations, oversees the maintenance of the common
												area, enforces the governing documents and sets the
												annual the budget. The Board is the decision-making body
												for all association business.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='c'>
										<AccordionItemHeading>
											<AccordionItemButton>
												Who makes up the board of directors?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The board members are elected by the membership and an
												annual election is held each year. The qualifications
												for a board member are listed in your association’s
												governing documents.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='d'>
										<AccordionItemHeading>
											<AccordionItemButton>
												When are the board meetings & can I attend?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												Board meeting dates and times are set by the Board.
												Please contact Powerstone Property Management or refer
												to the calendar for your association’s board meeting
												date, time and location. Homeowners are permitted to
												attend the regular session meetings of the Board and may
												be given an opportunity to speak during Homeowner Forum.
												The Board may also meet in Executive Session to discuss
												sensitive issues defined in the law and homeowners are
												no permitted to attend those meetings.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='e'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What are the CC&RS?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The Covenants, Conditions and Restrictions is a legal
												document, a covenant that runs with the land and is
												binding on future owners. It establishes the rules for
												how your association is governed, establishes
												maintenance responsibilities, insurance requirements,
												assessment provisions and use restrictions among other
												things. The CC&Rs empower the Board of Directors to act
												on behalf of the Association and create policies,
												restrictions and rules for the use and enjoyment of the
												property.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='f'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What are the by-laws?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The By-Laws include provisions regarding the
												organization structure of the association, its board of
												directors, membership and voting. It includes duties and
												powers of the board of directors, qualifications and
												term of office for the board of directors and
												establishes the quorum requirements for different types
												of meetings.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='g'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What are the articles of incorporation?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The Article of Incorporation is the document filed with
												the Secretary of State establishing the association as a
												legal corporation. They contain the legal name of the
												association and the purpose of the corporation.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='h'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What are the rules & regulations?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The Rules and Regulations are drafted by the Board of
												Directors with authority to do so from the CC&Rs. They
												are typically drafted to clarify the legal language in
												the CC&Rs and provide guidance on issues not covered in
												the original CC&Rs.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='i'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What is the assessment?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												All homeowners pay a regular assessment. The assessment
												is used for the maintenance and administration of the
												association. The association’s budget will describe the
												various line items for which the assessment is used.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid='j'>
										<AccordionItemHeading>
											<AccordionItemButton>
												What happends if I don't pay my assessment?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
												The CC&Rs provide remedies for the association if a
												member does not pay their assessment. This includes
												filing a lien which could eventually result in the
												foreclosure of your home. Your association’s Assessment
												Collection Procedure provide specific details of the
												course of action the association will take for failure
												to pay assessments. The law and the governing documents
												provide significant protection for the association since
												it would not be able to operate without the assessment
												revenue.
											</p>
										</AccordionItemPanel>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default faqFull;
