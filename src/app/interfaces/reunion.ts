/*
@Id
	@GeneratedValue
	long id;

	@Column(length = 100)
	String intitule;
	@Transient
	String resume;

	@OneToMany(mappedBy = "reunion")
	Collection<Participants> participants;

  */
