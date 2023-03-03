from Bio import SeqIO
from Bio.Blast import NCBIWWW, NCBIXML
from Bio.Seq import Seq
from Bio.SeqRecord import SeqRecord

# Step 1: Parse existing genomic sequences
existing_seqs = []
for record in SeqIO.parse("existing_genomes.fasta", "fasta"):
    existing_seqs.append(record.seq)

# Step 2: Perform BLAST search of new sequence
new_seq = Seq("ATCGATCG")
result_handle = NCBIWWW.qblast("blastn", "nt", new_seq)

# Step 3: Parse BLAST results
blast_records = NCBIXML.parse(result_handle)
hits = []
for record in blast_records:
    for alignment in record.alignments:
        for hsp in alignment.hsps:
            if hsp.identities / len(new_seq) > 0.9: # Set threshold for sequence identity
                hits.append(alignment.title)
hits = set(hits)

# Step 4: Remove hits from existing genomic sequences
updated_seqs = [seq for seq in existing_seqs if seq not in hits]
updated_seqs.append(new_seq)

# Step 5: Write updated sequences to new FASTA file
with open("updated_genomes.fasta", "w") as output_handle:
    for i, seq in enumerate(updated_seqs):
        record = SeqRecord(seq, id=f"Seq{i}", description="")
        SeqIO.write(record, output_handle, "fasta")
