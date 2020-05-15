/*
@Id
	@GeneratedValue
	long id;

	@OneToMany(mappedBy = "sondage")
	Collection<DatesPossibles> datesPossibles;

	@OneToMany(mappedBy = "sondage")
	Collection<DateReponses> datesReponses;

	@Temporal(TemporalType.DATE)
	Date dateValide;

	@ManyToOne
  Administrateur administrateur;
  */
